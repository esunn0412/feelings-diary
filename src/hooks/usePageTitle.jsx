import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    // conventional way to set title
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
