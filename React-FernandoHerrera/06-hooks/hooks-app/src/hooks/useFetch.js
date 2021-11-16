import { useEffect, useState, useRef } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({data: null, loading: true, error: null});

    const isMounted = useRef(true);


    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        
        setState({
            ...state,
            loading: true
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                //Previene un setState en un componente desmontando.
                if(isMounted.current){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
            .catch(err => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Info could not be fetched'
                })
            });

    }, [url]);

    return state;

}
