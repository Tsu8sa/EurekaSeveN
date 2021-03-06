import React, { useImperativeHandle, useState } from "react";
import { Menu } from "antd";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./component-navigator.scss";

interface MenuBar {
  className?: string;
  children?: ReactNode; //接受一个父组件传过来的组件
  sendfn: Function;
  ref: any;
}

const MenuBar: React.FC<MenuBar> = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    //暴露子组件方法
    sayHello,
  }));

  const [iconKey, setKey] = useState<String>("1");

  function sayHello() {
    setKey((oldValue) => {
      console.log(oldValue);
      return "2";
    });
  }
  function resetToTop<T>(clickMode): void {
    sayHello();
    props.sendfn(sayHello);

    const c = document.documentElement.scrollTop || document.body.scrollTop;
    const speed = 2; //动画速度 越小越快

    if (iconKey === "1") {
      if (c > 0) {
        /*
          window.requestAnimationFrame() 
          你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个 *回调函数* 作为参数，该回调函数会在浏览器下一次重绘之前执行
        */
        window.requestAnimationFrame(resetToTop);
        window.scrollTo(0, c - c / speed);
      }
    } else {
      /*
          window.requestAnimationFrame() 
          你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个 *回调函数* 作为参数，该回调函数会在浏览器下一次重绘之前执行
        */

      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
    }
  }
  function getSelectMenu(selectedItem) {
    setKey(selectedItem.key);
  }

  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        onSelect={getSelectMenu}
      >
        <Menu.Item key="1">
          <Link to="/" onClick={resetToTop}>
            首页
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          {" "}
          <Link to="/pigeonhole" onClick={resetToTop}>
            归档
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          {" "}
          <Link to="/index1" onClick={resetToTop}>
            {" "}
            其他
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/about" onClick={resetToTop}>
            {" "}
            关于
          </Link>
        </Menu.Item>
        <Menu.Item
          key="5" //DeleteFilled
        >
          垃圾桶
        </Menu.Item>
      </Menu>
    </div>
  );
});
export default MenuBar;
