//def imports
import 'package:flutter/material.dart';
//custom imports


class HomePage extends StatelessWidget {
  
  final counter = 10;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('My App Title'),
        centerTitle: true,
        backgroundColor: Color(0xFF1A237E),
        leading: Text('Logo here'),
      ),
      body: Center(
        child: Column(
            children: [
              Text(
                "Amount of Taps: ",
                style: TextStyle(fontSize: 30.0),
                ),
              Text(
                '$counter',
                style: TextStyle(fontSize: 25.0),
                )
            ],
            mainAxisAlignment: MainAxisAlignment.center,
          )
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          print('Hola mundo!');
        },
        child: Icon(Icons.add),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
    );
  }
}