class Bookmarks {
    constructor() {
        this.bookmarkSection = document.querySelector('.bookmarks-creation');
        this.bookmarkForm = document.querySelector('.bookmark-form');
        this.bookmarkInput = document.querySelector('.bookmark-input');
        this.bookmarkButton = document.querySelector('.btn-bookmark');
        this.errorContainer = document.querySelector('.error-message');
        this.bookmarkList = document.querySelector('.bookmarks-list');
        this.deleteButton = document.querySelector('.btn-remove-bookmarks');
        this.parser = new DOMParser();

        this.addEvents();
        this.showBookmarks();
    }

    cleanForm() {
        this.bookmarkInput.value = '';
        this.bookmarkButton.disabled = true;
    }

    async getHtmlContent(content) {
        return this.parser.parseFromString(content, 'text/html');
    }

    async createBookmarkLS(e) {
        e.preventDefault();
        const url = this.bookmarkInput.value;
        try {
            const res = await fetch(url);
            const stringHtml = await res.text(); //await this.getHtmlContent(res);
            const title = (await this.getHtmlContent(stringHtml)).querySelector('title').innerText;
            localStorage.setItem(title, JSON.stringify({ title, url }));
            this.showBookmarks();
            this.cleanForm();
        } catch (err) {
            this.reportError(err);
            console.log(err);
        }
    }

    reportError(err) {
        this.errorContainer.classList.toggle('disable');
        this.errorContainer.innerHTML = `Unexpected error: ${err}`;

        setTimeout(() => {
            this.errorContainer.innerHTML = null;
            this.errorContainer.classList.toggle('disable');
        }, 2000);
    }

    createBookmark({ title, url }) {
        return `
                <div class="link" >
                    <h3>${title}</h3>
                    <p><a href="${url}">${url}</a></p>
                </div>
        `;
    }

    showBookmarks() {
        const bookmarks = Object.keys(localStorage).map(k => JSON.parse(localStorage.getItem(k)));
        const htmlElements = bookmarks.map(bookmark => this.createBookmark(bookmark));

        this.bookmarkList.innerHTML = '';

        htmlElements.forEach(element => {
            this.bookmarkList.innerHTML += element;
        });
    }

    addEvents() {
        this.bookmarkInput.addEventListener('keyup', () => {
            this.bookmarkButton.disabled = !this.bookmarkInput.validity.valid;
        });

        this.bookmarkForm.addEventListener('submit', this.createBookmarkLS.bind(this));

        this.deleteButton.addEventListener('click', () => {
            localStorage.clear();
            this.showBookmarks();
        });

        this.bookmarkList.addEventListener('click', e => {
            if (e.target.href) {
                e.preventDefault();
                window.api.openExternalLinks('linkManager', e.target.href);
            }
        });
    }
}

new Bookmarks();
