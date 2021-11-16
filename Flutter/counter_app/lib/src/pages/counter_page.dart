import 'package:flutter/material.dart';
//custom imports

class CounterPage extends StatefulWidget {
  
  @override
  createState() => _CounterPageState();

}

class _CounterPageState extends State<CounterPage> {

  int _counter = 0;

  @override
  Widget build(BuildContext context) {
     return Scaffold(
      appBar: AppBar(
        title: Text('Counter Page'),
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
                '$_counter',
                style: TextStyle(fontSize: 25.0),
                )
            ],
            mainAxisAlignment: MainAxisAlignment.center,
          )
      ),
      floatingActionButton: _createButtons(),
    );
  }


  Widget _createButtons () {
    return Row(
      mainAxisAlignment: MainAxisAlignment.end,
      children: <Widget> [
        SizedBox(width: 20),
        FloatingActionButton(child: Icon(Icons.replay), onPressed: _resetTap,),
        Expanded(child: SizedBox()),
        FloatingActionButton(child: Icon(Icons.remove), onPressed: _removeTap,),
        Expanded(child: SizedBox()),
        FloatingActionButton(child: Icon(Icons.add), onPressed: _addTap,)
      ],
      );
  }

  void _addTap () {
    setState(() => _counter++);
  }

  void _removeTap () {
    setState(() => _counter>=1?_counter--:_counter);
  }

  void _resetTap () {
    setState(() => _counter = 0);
  }

}