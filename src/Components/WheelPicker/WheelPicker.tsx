import { useEffect, useRef } from "react";
import "./WheelPicker.css";

function WheelPicker({ list }: { list: string[] }) {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: document.querySelector(".wheel__container"),
      rootMargin: "0px",
      threshold: 1, // fully intersects
    };

    const callback = (entries: any) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        console.log(entry.intersectionRatio);
        // Check if the entry is intersecting
        if (entry.intersectionRatio >= 0.5) {
          // Your logic when intersection occurs
          console.log("Intersection occurred: " + entry.target.textContent);
          let selectedLi = document.querySelector(".wheel-selected");
          selectedLi?.classList.remove("wheel-selected");
          // if (
          //   (selectedLi?.nextElementSibling === null && isScrollingDown) ||
          //   (selectedLi?.previousElementSibling === null && !isScrollingDown)
          // ) {
          //   return;
          // }
          selectedLi = entry.target;
          selectedLi?.classList.add("wheel-selected");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const targetElement = targetRef.current;

    if (targetElement) {
      const liElements = document.querySelectorAll(".wheel li");
      liElements.forEach((li) => {
        observer.observe(li);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // check if scrooling position is differnt from the previous one
  // if (scrollPosition === e.ta
  //   return;
  // }
  // setScrollPosition(e.currentTarget.scrollTop);
  // You can do something with the scrolling direction here
  // console.log(isScrollingDown ? "Scrolling down" : "Scrolling up");
  // const selectedLi = document.querySelector(".wheel-selected");
  // if (
  //   (selectedLi?.nextElementSibling === null && isScrollingDown) ||
  //   (selectedLi?.previousElementSibling === null && !isScrollingDown)
  // ) {
  //   return;
  // }
  // if (isScrollingDown) {
  //   selectedLi?.nextElementSibling?.classList.add("wheel-selected");
  // } else {
  //   selectedLi?.previousElementSibling?.classList.add("wheel-selected");
  // }
  // selectedLi?.classList.remove("wheel-selected");

  useEffect(() => {
    if (targetRef.current) {
      (targetRef.current as HTMLElement).nextElementSibling?.scrollTo(0, 50);
    }
  }, []);

  return (
    <div className="relative w-fit wheel__container">
      <div className="wheel-indicator" ref={targetRef}></div>
      <div className="wheel text-sm">
        <ul>
          {list.map((i, index) => (
            <li
              key={index}
              className="overflow-hidden whitespace-nowrap ellipsis text-xs"
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WheelPicker;
