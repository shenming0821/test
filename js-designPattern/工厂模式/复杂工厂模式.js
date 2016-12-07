var XMLHttpFactory = function () {};　 //这是一个抽象工厂模式

XMLHttpFactory.prototype = {　 //如果真的要调用这个方法会抛出一个错误，它不能被实例化，只能用来派生子类

  createFactory: function () {
    throw new Error('This is an abstract class');
  }
}

var XHRHandler = function () {}; //定义一个子类

// 子类继承父类原型方法
extend(XHRHandler, XMLHttpFactory);

XHRHandler.prototype = new XMLHttpFactory(); //把超类原型引用传递给子类,实现继承

XHRHandler.prototype.constructor = XHRHandler; //重置子类原型的构造器为子类自身

//重新定义createFactory 方法
XHRHandler.prototype.createFactory = function () {
  var XMLHttp = null;
  if (window.XMLHttpRequest) {
    XMLHttp = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")　　
  }

  return XMLHttp;
}

/*
应用场景：
以下几种情景下工厂模式特别有用：
（1）对象的构建十分复杂
（2）需要依赖具体环境创建不同实例
（3）处理大量具有相同属性的小对象

优点：
　　可以实现一些相同的方法，这些相同的方法我们可以放在父类中编写代码，那么需要实现具体的业务逻辑，那么可以放在子类中重写该父类的方法，去实现自己的业务逻辑；
　　也就是说有两点：
　　1、弱化对象间的耦合，防止代码的重复。在一个方法中进行类的实例化，可以消除重复性的代码。
　　2、重复性的代码可以放在父类去编写，子类继承于父类的所有成员属性和方法，子类只专注于实现自己的业务逻辑。
缺点：
   当工厂增加到一定程度的时候，提升了代码的复杂度，可读性下降。而且没有解决对象的识别问题，即怎么知道一个对象的类型。
*/