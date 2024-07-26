// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TITLE = "乄轩丶辕°のHouse. ヾ(๑╹ヮ╹๑)ﾉ";
export const SITE_DESCRIPTION = "Blog ";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "乄轩丶辕°";  //用户名
export const USER_AVATAR = "/profile.webp";  //头像

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com"; //评论
export const TRANSITION_API = true;

// Some informative text on the site
export const infoTest = {
  tag: "Tag: ",
  noTag: "Uncategorized",
  tagPage: "Blog - ",
  link: "Link: ",
  prevPage: "Recent posts",
  nextPage: "Older posts",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "home" }, // Home page
  { id: "blog", text: "博文", href: "/blog", svg: "blog" }, // Blog page

  {
    id: "contact",
    text: "联系我",
    href: "mailto:contact.1938770808@qq.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [

  {
    href: "https://github.com/JinHao0007",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/527114995",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
];
