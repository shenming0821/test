/**
 * 工厂模式的定义：提供创建对象的接口，意思就是根据领导（调用者）的指示（参数），生产相应的产品（对象）。
 * 创建一个对象常常需要复杂的过程，所以不适合在一个复杂的对象中。
 * 创建对象可能会导致大量的重复代码，也可能提供不了足够级别的抽象。
 * 工厂就是把成员对象的创建工作转交给一个外部对象，好处在于消除对象之间的耦合(也就是相互影响)
 */

// 简单工厂模式：使用一个类，通常为单体，来生成实例。
var XMLHttpFactory = function () {};　　　　　　 //这是一个简单工厂模式

XMLHttpFactory.createXMLHttp = function () {
    var XMLHttp = null;　　　　
    if (window.XMLHttpRequest) {　　　　　　
      XMLHttp = new XMLHttpRequest()
    } else if (window.ActiveXObject) {　　　　　　
      XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")　　　　
    }　　
    return XMLHttp;　　
  }　　 //XMLHttpFactory.createXMLHttp()这个方法根据当前环境的具体情况返回一个XHR对象。
  　　
var AjaxHander = function () {　　　　
  var XMLHttp = XMLHttpFactory.createXMLHttp();　　　　 // ...
  　　
}