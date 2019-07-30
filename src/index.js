import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  useEffect(() => {
    window.addEventListener("scroll", parallaxIt, false);
    return () => {
      window.removeEventListener("scroll", parallaxIt, false);
    };
  }, []);
  console.log(window);
  // makes the parallax elements
  const parallaxIt = () => {
    // create variables
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // on window scroll event
    window.on("scroll resize", () => {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    });

    // for each of content parallax element
    $('[data-type="content"]').each(function(index, e) {
      var $contentObj = $(this);
      var fgOffset = parseInt($contentObj.offset().top);
      var yPos;
      var speed = $contentObj.data("speed") || 1;

      window.onscroll("scroll resize", () => {
        yPos = fgOffset - scrollTop / speed;

        $contentObj.css("top", yPos);
      });
    });

    // for each of background parallax element
    const onBackgroundLoad = () => {
      var $backgroundObj = $(this);
      var bgOffset = parseInt($backgroundObj.offset().top);
      var yPos;
      var coords;
      var speed = $backgroundObj.data("speed") || 0;

      $fwindow.on("scroll resize", function() {
        yPos = -((scrollTop - bgOffset) / speed);
        coords = "40% " + yPos + "px";

        $backgroundObj.css({ backgroundPosition: coords });
      });
    };

    // triggers winodw scroll for refresh
    $fwindow.trigger("scroll");
  };
  const onContentLoad = () => {};

  const Content = props => {
    console.log(props);
    if (props.content) {
      onContentLoad();
    }
    return <div {...props}>{props.children}</div>;
  };

  const Section = ({ data, children }) => {
    return (
      <section>
        <div
          className="image"
          background
          data-type="background"
          data-speed={data.dataSpeed}
        />
        <Content className="stuff" content data-type="content">
          {data.h1 && <h1>{data.h1}</h1>}
          {data.h2 && <h2>{data.h2}</h2>}
          {data.p && <h2>{data.p}</h2>}
          {children}
        </Content>
      </section>
    );
  };

  const sectionArr = [
    {
      h1: "Simple Parallax scroll",
      h2: "Reoptimized",
      dataSpeed: 2
    },
    {
      h2: "Made to be fast",
      p:
        "Lorem Deserunt maiores minima ipsa. Adipisci, corrupti, voluptatibus! Similique quidem necessitatibus provident.",
      dataSpeed: 7
    },
    {
      text:
        "Accusamus at ex amet perferendis atque fuga, ad earum, ipsa perspiciatis, dolore neque, accusantium consectetur quis voluptatibus culpa architecto animi natus facere expedita sed. Voluptatem odit explicabo amet neque aut.",
      dataSpeed: 6
    },
    {
      text:
        "Accusamus at ex amet perferendis atque fuga, ad earum, ipsa perspiciatis, dolore neque, accusantium consectetur quis voluptatibus culpa architecto animi natus facere expedita sed. Voluptatem odit explicabo amet neque aut.",
      dataSpeed: 5
    },
    {
      text:
        "Accusamus at ex amet perferendis atque fuga, ad earum, ipsa perspiciatis, dolore neque, accusantium consectetur quis voluptatibus culpa architecto animi natus facere expedita sed. Voluptatem odit explicabo amet neque aut.",
      dataSpeed: 3
    },
    {
      text:
        "Accusamus at ex amet perferendis atque fuga, ad earum, ipsa perspiciatis, dolore neque, accusantium consectetur quis voluptatibus culpa architecto animi natus facere expedita sed. Voluptatem odit explicabo amet neque aut.",
      dataSpeed: 3
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="container">
        {sectionArr.map((obj, i) => (
          <Section key={i} data={obj} />
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
