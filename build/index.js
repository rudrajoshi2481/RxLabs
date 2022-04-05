var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
init_react();
var import_express = __toESM(require("express"));
var import_compression = __toESM(require("compression"));
var import_morgan = __toESM(require("morgan"));
var import_express2 = require("@remix-run/express");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\rudra\Desktop\o\letter.js\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());
var import_react6 = require("@chakra-ui/react");

// app/components/Navbar.tsx
init_react();
var import_react2 = require("@chakra-ui/react");
var import_react3 = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());

// app/context/loginDataContext.tsx
init_react();
var import_react = require("react");
var LoginContext = (0, import_react.createContext)(null);
var LoginContextProvider = (props) => {
  const mainData = [{
    nameDrug: "paracetamol",
    dosageForm: "syrup",
    mg: "16",
    duration: "101"
  }, {
    nameDrug: "warfarin",
    dosageForm: "lotion",
    mg: "16",
    duration: "111"
  }];
  const [data, setData] = (0, import_react.useState)({
    email: "",
    displayName: ""
  });
  return /* @__PURE__ */ React.createElement(LoginContext.Provider, {
    value: [data, setData]
  }, props.children);
};

// app/components/Navbar.tsx
var import_react4 = require("@chakra-ui/react");
var import_react5 = require("@chakra-ui/react");
function Navbar() {
  const [d, setD] = (0, import_react3.useContext)(LoginContext);
  return /* @__PURE__ */ import_react3.default.createElement(import_react2.Box, null, /* @__PURE__ */ import_react3.default.createElement(import_react2.HStack, {
    py: "1",
    justifyContent: "space-between",
    background: "green.500"
  }, /* @__PURE__ */ import_react3.default.createElement(import_react2.UnorderedList, {
    display: "flex"
  }, /* @__PURE__ */ import_react3.default.createElement(import_react2.ListItem, {
    p: "3",
    color: "white",
    listStyleType: "none"
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    to: "/"
  }, "Labs \u{1F52C}")), /* @__PURE__ */ import_react3.default.createElement(import_react2.ListItem, {
    p: "3",
    color: "white",
    listStyleType: "none"
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    to: "/dashboard"
  }, "Dashboard")), /* @__PURE__ */ import_react3.default.createElement(import_react2.ListItem, {
    p: "3",
    color: "white",
    listStyleType: "none"
  }, /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    to: "/login"
  }, "Login"))), /* @__PURE__ */ import_react3.default.createElement(import_react2.UnorderedList, {
    display: "flex"
  }, /* @__PURE__ */ import_react3.default.createElement(import_react5.Popover, null, /* @__PURE__ */ import_react3.default.createElement(import_react5.PopoverTrigger, null, /* @__PURE__ */ import_react3.default.createElement(import_react2.WrapItem, null, /* @__PURE__ */ import_react3.default.createElement(import_react2.HStack, {
    mr: "3",
    justifyContent: "flex-start",
    alignItems: "baseline"
  }, d.email != "" ? /* @__PURE__ */ import_react3.default.createElement(import_react4.Avatar, {
    name: d.displayName
  }) : null, /* @__PURE__ */ import_react3.default.createElement(import_react2.Text, null, d.email)))), /* @__PURE__ */ import_react3.default.createElement(import_react5.PopoverContent, null, /* @__PURE__ */ import_react3.default.createElement(import_react5.PopoverArrow, null), /* @__PURE__ */ import_react3.default.createElement(import_react5.PopoverCloseButton, null), /* @__PURE__ */ import_react3.default.createElement(import_react5.PopoverHeader, null, "Confirmation!"), /* @__PURE__ */ import_react3.default.createElement(import_react5.PopoverBody, null, "Are you sure you want to have that paracetamol ?"))))));
}
var Navbar_default = Navbar;

// route:C:\Users\rudra\Desktop\o\letter.js\app\root.tsx
var import_react7 = require("@chakra-ui/react");
var config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};
var theme = (0, import_react7.extendTheme)({ config });
var meta = () => {
  return { title: "New Remix App" };
};
var Document = () => {
  return /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react6.ColorModeScript, {
    initialColorMode: "dark"
  }), /* @__PURE__ */ React.createElement(import_react6.ChakraProvider, null, /* @__PURE__ */ React.createElement(LoginContextProvider, null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null))));
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement(Document, null));
}

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader
});
init_react();
var import_react8 = require("@chakra-ui/react");
var import_react9 = __toESM(require("react"));
var import_remix5 = __toESM(require_remix());

// app/sessions.ts
init_react();
var import_remix4 = __toESM(require_remix());
var { getSession, commitSession, destroySession } = (0, import_remix4.createCookieSessionStorage)({
  cookie: {
    name: "__session"
  }
});

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard.tsx
var loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("userSession")) {
    return { showPage: true };
  }
  return { showPage: false };
};
function Dashboard() {
  const { showPage } = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, true ? /* @__PURE__ */ import_react9.default.createElement(PrivatePage, null) : /* @__PURE__ */ import_react9.default.createElement(NotSignInPage, null));
}
var PrivatePage = () => {
  return /* @__PURE__ */ import_react9.default.createElement(import_react8.Container, {
    maxW: "ontainer.lg"
  }, /* @__PURE__ */ import_react9.default.createElement(import_react8.Heading, {
    py: "3"
  }, "Rx Labs"), /* @__PURE__ */ import_react9.default.createElement(import_remix5.Outlet, null));
};
var dashboard_default = Dashboard;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => dashboard_default2
});
init_react();
var import_react16 = require("@chakra-ui/react");

// app/components/SlateEditor.tsx
init_react();
var import_react10 = require("@chakra-ui/react");
var import_is_hotkey = __toESM(require("is-hotkey"));
var import_react11 = __toESM(require("react"));
var import_slate = require("slate");
var import_slate_history = require("slate-history");
var import_slate_react = require("slate-react");
var import_fa = require("react-icons/fa");
var import_bi = require("react-icons/bi");
var HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code"
};
var LIST_TYPES = ["numbered-list", "bulleted-list"];
function SlateEditor() {
  const initialValue = [];
  const [value, setValue] = import_react11.default.useState(initialValue);
  const renderElement = (0, import_react11.useCallback)((props) => /* @__PURE__ */ import_react11.default.createElement(Element, __spreadValues({}, props)), []);
  const renderLeaf = (0, import_react11.useCallback)((props) => /* @__PURE__ */ import_react11.default.createElement(Leaf, __spreadValues({}, props)), []);
  const editor = (0, import_react11.useMemo)(() => (0, import_slate_history.withHistory)((0, import_slate_react.withReact)((0, import_slate.createEditor)())), []);
  return /* @__PURE__ */ import_react11.default.createElement(import_react10.Box, null, /* @__PURE__ */ import_react11.default.createElement(import_react10.Box, null, /* @__PURE__ */ import_react11.default.createElement(import_react10.HStack, {
    spacing: "2"
  }, /* @__PURE__ */ import_react11.default.createElement(import_react10.HStack, null, /* @__PURE__ */ import_react11.default.createElement(MarkButton, {
    e: editor,
    mr: "1",
    size: "sm",
    icon: /* @__PURE__ */ import_react11.default.createElement(import_fa.FaBold, null),
    format: "bold"
  }, "Bold"), /* @__PURE__ */ import_react11.default.createElement(MarkButton, {
    e: editor,
    icon: /* @__PURE__ */ import_react11.default.createElement(import_fa.FaItalic, null),
    format: "italic",
    mx: "1",
    size: "sm"
  }, "Italic"), /* @__PURE__ */ import_react11.default.createElement(MarkButton, {
    e: editor,
    icon: /* @__PURE__ */ import_react11.default.createElement(import_fa.FaCode, null),
    format: "code",
    mx: "1",
    size: "sm"
  }, "code"), /* @__PURE__ */ import_react11.default.createElement(BlockButton, {
    e: editor,
    icon: /* @__PURE__ */ import_react11.default.createElement(import_fa.FaHeading, null),
    format: "heading",
    mx: "1",
    size: "sm"
  }, "h1"), /* @__PURE__ */ import_react11.default.createElement(import_react10.Input, {
    type: "color",
    maxW: "60px",
    size: "sm"
  })), /* @__PURE__ */ import_react11.default.createElement(import_react10.HStack, null, /* @__PURE__ */ import_react11.default.createElement(import_react10.HStack, null, /* @__PURE__ */ import_react11.default.createElement(import_react10.Text, null, "Status "), /* @__PURE__ */ import_react11.default.createElement(import_bi.BiRefresh, null)), /* @__PURE__ */ import_react11.default.createElement(import_react10.Button, {
    size: "md",
    colorScheme: "green"
  }, "\u2714")))), /* @__PURE__ */ import_react11.default.createElement(import_react10.Box, {
    pt: "3",
    border: "1px",
    borderColor: "green",
    borderStyle: "dashed",
    style: { width: "60vw", minHeight: "10vh" },
    p: "3",
    mt: "3"
  }, /* @__PURE__ */ import_react11.default.createElement(import_slate_react.Slate, {
    editor,
    value,
    onChange: (e) => setValue(e)
  }, /* @__PURE__ */ import_react11.default.createElement(import_slate_react.Editable, {
    renderElement,
    renderLeaf,
    placeholder: "Enter some rich text\u2026",
    spellCheck: true,
    autoFocus: true,
    onKeyDown: (event) => {
      for (const hotkey in HOTKEYS) {
        if ((0, import_is_hotkey.default)(hotkey, event)) {
          event.preventDefault();
          const mark = HOTKEYS[hotkey];
          toggleMark(editor, mark);
        }
      }
    }
  }))));
}
var BlockButton = ({ format, icon, e }) => {
  let editor = e;
  let mark = format;
  return /* @__PURE__ */ import_react11.default.createElement(import_react10.Button, {
    size: "sm",
    borderRadius: "1",
    colorScheme: "gray",
    onMouseDown: (event) => {
      event.preventDefault();
      toggleBlock(editor, format);
    }
  }, icon);
};
var MarkButton = ({ format, icon, e }) => {
  let editor = e;
  let mark = format;
  return /* @__PURE__ */ import_react11.default.createElement(import_react10.Button, {
    size: "sm",
    borderRadius: "1",
    colorScheme: "gray",
    onMouseDown: (event) => {
      event.preventDefault();
      toggleMark(editor, format);
    }
  }, icon);
};
var Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return /* @__PURE__ */ import_react11.default.createElement("blockquote", __spreadValues({}, attributes), children);
    case "bulleted-list":
      return /* @__PURE__ */ import_react11.default.createElement("ul", __spreadValues({}, attributes), children);
    case "heading":
      return /* @__PURE__ */ import_react11.default.createElement(import_react10.Heading, __spreadValues({}, attributes), children);
    case "heading-two":
      return /* @__PURE__ */ import_react11.default.createElement("h2", __spreadValues({}, attributes), children);
    case "list-item":
      return /* @__PURE__ */ import_react11.default.createElement("li", __spreadValues({}, attributes), children);
    case "numbered-list":
      return /* @__PURE__ */ import_react11.default.createElement("ol", __spreadValues({}, attributes), children);
    default:
      return /* @__PURE__ */ import_react11.default.createElement("p", __spreadValues({}, attributes), children);
  }
};
var Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = /* @__PURE__ */ import_react11.default.createElement(import_react10.Text, {
      as: "strong"
    }, children);
  }
  if (leaf.code) {
    children = /* @__PURE__ */ import_react11.default.createElement(import_react10.Text, {
      as: "code"
    }, children);
  }
  if (leaf.italic) {
    children = /* @__PURE__ */ import_react11.default.createElement(import_react10.Text, {
      as: "em"
    }, children);
  }
  if (leaf.underline) {
    children = /* @__PURE__ */ import_react11.default.createElement(import_react10.Text, {
      as: "u"
    }, children);
  }
  return /* @__PURE__ */ import_react11.default.createElement("span", __spreadValues({}, attributes), children);
};
function toggleMark(editor, mark) {
  const isActive = isMarkActive(editor, mark);
  console.log("TOGGLE MARKED WORKED");
  if (isActive) {
    import_slate.Editor.removeMark(editor, mark);
  } else {
    import_slate.Editor.addMark(editor, mark, true);
  }
}
function isMarkActive(editor, mark) {
  const marks = import_slate.Editor.marks(editor);
  return marks ? marks[mark] === true : false;
}
function toggleBlock(editor, format) {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);
  import_slate.Transforms.unwrapNodes(editor, {
    match: (n) => !import_slate.Editor.isEditor(n) && import_slate.Element.isElement(n) && LIST_TYPES.includes(n.type),
    split: true
  });
  const newProperties = {
    type: isActive ? "paragraph" : isList ? "list-item" : format
  };
  import_slate.Transforms.setNodes(editor, newProperties);
  if (!isActive && isList) {
    const block = { type: format, children: [] };
    import_slate.Transforms.wrapNodes(editor, block);
  }
}
function isBlockActive(editor, format) {
  const { selection } = editor;
  if (!selection)
    return false;
  const [match] = Array.from(import_slate.Editor.nodes(editor, {
    at: import_slate.Editor.unhangRange(editor, selection),
    match: (n) => !import_slate.Editor.isEditor(n) && import_slate.Element.isElement(n) && n.type === format
  }));
  return !!match;
}

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
var import_react17 = require("@chakra-ui/react");
var import_react18 = require("@chakra-ui/react");
var import_ai = require("react-icons/ai");
var import_react19 = require("@chakra-ui/react");
var import_react20 = require("react");

// app/context/presContext.tsx
init_react();
var import_react12 = require("react");
var PresContext = (0, import_react12.createContext)(null);
var PresContextProvider = (props) => {
  const mainData = [{
    nameDrug: "paracetamol",
    dosageForm: "syrup",
    mg: "16",
    duration: "101"
  }, {
    nameDrug: "warfarin",
    dosageForm: "lotion",
    mg: "16",
    duration: "111"
  }];
  const [data, setData] = (0, import_react12.useState)([
    {
      nameDrug: "",
      dosageForm: "",
      mg: "",
      duration: "",
      id: new Date().getTime()
    }
  ]);
  return /* @__PURE__ */ React.createElement(PresContext.Provider, {
    value: [data, setData]
  }, props.children);
};

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
var import_react21 = require("@chakra-ui/react");

// app/components/FindPatient.tsx
init_react();
var import_react13 = require("@chakra-ui/react");
var import_react14 = __toESM(require("react"));
var import_react15 = require("@chakra-ui/react");
var import_remix6 = __toESM(require_remix());

// app/utils/fire.server.ts
init_react();
var import_app = require("firebase-admin/app");
var import_firestore = require("firebase-admin/firestore");
var import_auth = require("firebase-admin/auth");
var admin = require("firebase-admin");
var a = {
  "type": "service_account",
  "project_id": "rudhrajoshicom",
  "private_key_id": "9fef36b279a41948e6643434df9732081a5bd295",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDBaPbSII3Tivs+\nD9iEiOem7eQc3nDruBUD0LM1QQ2bmMC3UQYgWyMiH/unphNsI27cT8MpUv17nu3R\n4Jbt2s53ZeEDsDErKZUHnLzxb+e8zb7lAYOsMzKatqSNPuOHhwB8aSSJAqwFC1up\nWn+nU77OVvlHbbhCQo+wGszK9Sis0McjMYXqwvty25R6l3wrksR9dePmfKJJJV09\n9hN7nasvu0Hmg3g9SUyHwVVaDW0g/3UVA9sy2BdoSd5i8se1L+yNQnc+YhVrYYLS\npTdLKvZNh+gLvF+Duqyciy2KqbEMvS6SRT2ArmYeG+qQhl+WVRwLSBsQAF4wQAgI\nnu73Z8JtAgMBAAECggEAGCJy+lGZoRYst9feWtuCnK/+0SNoz+FOrgUy96hAfHQZ\nSEbSDuOQhMec7ZSpw8rAILnLTrLOcsioQJJYAyJUtU1/QKiR2iL8N9D1OuON9V9v\nPMBtn+VboTa9XerFFbpg8yVjq70rng2GyKFEYKrwmmr7/E/SuGH58C3H9GOXSckk\nHuK6jSoYlaCuzTzzrTXpZqA0CLtKq7+0AYzNWsuVj3NoRPMKuStX3f5NjVjlmakf\nOxdO4Uy9Sdk3UK1c8M23W2rJ6PxiGUtORDAa23wmrvX/v1H6fpIgI5nCgUncL6V5\n74r3mYb0eFJMOxZY9eBXa23/xghGSYMujRkxQunMAQKBgQDmghPxyH7z8haQevHJ\n38FtcTRX9uOCrebyGHWuIjMU/qEz7HcATQPSRRo/NJG5nrPjES673lg30Lo3M6EU\nrZzh1DWLj8lREEgpMCj2qEK0Z0LCoPqMozCcwRZmLb5ZLkPEubQd+27bIcG+B9tb\nxtyWXhiqJEW0QM6lhbNW5w6YgQKBgQDWzJnO/N59FmxZxc5cxRmxz6o0cdd/rPMs\nL+5+R4tBo9SBydzlvp85O4KZ0eOJW2TF6NT/gbay30r/1vWdzPQj6wGcHZb65Yqu\nu8RX0FQPt2swZQGAN/tbvtkSZVwdaNim2xsCtK/cJaYZVS/djPEABIpPDKivg5Zy\nN4yrqBMT7QKBgQCJfBJLRuu5sq4UtM/cOZJUJY4z3TTrr6+svDwMhad0IT+jCaoc\nytK5qq+x/Tfhv6/JgmkecsqpV9yJqkisXbTR2VGqkTNhH1X7AxebrtZCZcii74Mh\nOQB4ro4embAL3xVak+zDaUFAgEzffC4w+lZ9dVg+uu28Sl82yJ0j+yJwgQKBgFvb\nHyNPK+4eOrOhTYCKoVRS1BydWmS1F0CcNsc13S1y3BussZRmEj0tX8pb4YwJ02x3\nBy9Ez1Zq+u2xhVO4I+eARi320Wv14XqbvXk4E9qsu1/0sdGdHxa65KVjRyMkhRHF\nvSVJE7N3PjKzJUb/UMiLKIJpjXGROjMZ4kQ+Gfp5AoGAR8xt++MozVOb9vtF1uTL\n23FlqHBuSqnRMqsgiWtRIA+9M+03xRDPJ8zO0mImmP+tpyS6jDGgGZE2Mcqx/pE/\nICaMVPGjsXYdbp270c0k2fH2Z/tVXAgrHhzGgMBgziccWH67Rn8mgjx3T2aqlXdt\ngNMAORiCIO+LS+cexYRYFLk=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xud18@rudhrajoshicom.iam.gserviceaccount.com",
  "client_id": "111097323745740515989",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xud18%40rudhrajoshicom.iam.gserviceaccount.com"
};
(0, import_app.initializeApp)({ credential: (0, import_app.cert)(a) });
var firestore = (0, import_firestore.getFirestore)();
var fireAuth = (0, import_auth.getAuth)();

// app/components/FindPatient.tsx
var FindSavedPat = () => {
  return /* @__PURE__ */ import_react14.default.createElement(import_react13.Box, {
    pt: "3",
    border: "3px",
    style: { width: "30vw", minHeight: "40vh" },
    p: "3",
    mt: "3",
    w: "60"
  }, /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Patient Id"), /* @__PURE__ */ import_react14.default.createElement(import_react15.Input, {
    mb: "1",
    my: "1",
    type: "number",
    placeholder: "patient id"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Patient Name"), /* @__PURE__ */ import_react14.default.createElement(import_react15.Input, {
    my: "1",
    mb: "1",
    type: "number",
    placeholder: "Name"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Patient PhoneNumber"), /* @__PURE__ */ import_react14.default.createElement(import_react15.Input, {
    mb: "1",
    my: "1",
    type: "number",
    placeholder: "Phone Number"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.Button, {
    my: "3"
  }, "Search"));
};
var CreateNewPatient = () => {
  const [e, setE] = (0, import_react14.useState)("");
  const [d, setD] = (0, import_react14.useContext)(LoginContext);
  return /* @__PURE__ */ import_react14.default.createElement(import_react13.Box, {
    pt: "3",
    border: "3px",
    style: { width: "30vw", minHeight: "40vh" },
    p: "3",
    mt: "3",
    w: "60"
  }, /* @__PURE__ */ import_react14.default.createElement(import_remix6.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react14.default.createElement(import_react13.FormLabel, null, "Patient Email Id"), /* @__PURE__ */ import_react14.default.createElement(import_react15.Input, {
    mb: "1",
    name: "email",
    type: "email",
    my: "1",
    onChange: (e2) => setE(e2.target.value),
    value: e,
    placeholder: "patient Email"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react15.Input, {
    value: d.email,
    name: "docEmail"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.Button, {
    m: "3",
    name: "_action",
    value: "createPat",
    type: "submit",
    colorScheme: "green"
  }, "create Patient")));
};
var GetAllPatient = () => {
  return /* @__PURE__ */ import_react14.default.createElement(import_react13.Text, null, "Get all Patient");
};
function FindPatient() {
  const ActionData = (0, import_remix6.useActionData)();
  (0, import_react14.useEffect)(() => {
    console.log(ActionData);
    if (ActionData) {
    }
  }, [ActionData]);
  return /* @__PURE__ */ import_react14.default.createElement(import_react13.Box, {
    style: { width: "60vw" }
  }, /* @__PURE__ */ import_react14.default.createElement(import_react13.Tabs, null, /* @__PURE__ */ import_react14.default.createElement(import_react13.TabList, null, /* @__PURE__ */ import_react14.default.createElement(import_react13.Tab, null, "Login"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Tab, null, "Create New Patient"), /* @__PURE__ */ import_react14.default.createElement(import_react13.Tab, null, "Get all Patient")), /* @__PURE__ */ import_react14.default.createElement(import_react13.TabPanels, null, /* @__PURE__ */ import_react14.default.createElement(import_react13.TabPanel, null, /* @__PURE__ */ import_react14.default.createElement(FindSavedPat, null)), /* @__PURE__ */ import_react14.default.createElement(import_react13.TabPanel, null, /* @__PURE__ */ import_react14.default.createElement(CreateNewPatient, null)), /* @__PURE__ */ import_react14.default.createElement(import_react13.TabPanel, null, /* @__PURE__ */ import_react14.default.createElement(GetAllPatient, null)))));
}
{
}
var FindPatient_default = FindPatient;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
var import_bi2 = require("react-icons/bi");
function Index() {
  const [showPage, setShowPage] = (0, import_react20.useState)(1);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PresContextProvider, null, /* @__PURE__ */ React.createElement(import_react16.Button, {
    my: "3",
    mb: "3"
  }, "Create New", " "), /* @__PURE__ */ React.createElement(import_react16.Divider, null), /* @__PURE__ */ React.createElement(import_react16.Box, null, /* @__PURE__ */ React.createElement(import_react21.Breadcrumb, {
    py: "3"
  }, /* @__PURE__ */ React.createElement(import_react21.BreadcrumbItem, null, /* @__PURE__ */ React.createElement(import_react21.BreadcrumbLink, {
    color: "green",
    onClick: (e) => setShowPage(0)
  }, /* @__PURE__ */ React.createElement(import_react16.HStack, null, "  ", /* @__PURE__ */ React.createElement(import_bi2.BiArrowBack, null), "  ", /* @__PURE__ */ React.createElement(import_react16.Text, null, " Find Patient")))), showPage === 1 ? /* @__PURE__ */ React.createElement(import_react21.BreadcrumbItem, null, /* @__PURE__ */ React.createElement(import_react21.BreadcrumbLink, {
    href: "#"
  }, "name of Patient")) : null)), showPage === 1 ? /* @__PURE__ */ React.createElement(import_react16.VStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react16.HStack, {
    w: "full",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Viewer, null), /* @__PURE__ */ React.createElement(OldPrescriptions, null)), /* @__PURE__ */ React.createElement(import_react16.HStack, {
    mt: "8",
    justifyContent: "space-between",
    alignItems: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_react16.Button, {
    onClick: (e) => {
      window.print();
      console.log("print");
    }
  }, "\u{1F5A8}\uFE0F"), /* @__PURE__ */ React.createElement(import_react16.Button, {
    colorScheme: "green"
  }, "Save Prescription "))) : /* @__PURE__ */ React.createElement(FindPatient_default, null)));
}
var OldPrescriptions = () => {
  return /* @__PURE__ */ React.createElement(import_react16.VStack, {
    style: { marginRight: "15vw" },
    pl: "9",
    pt: "3",
    mr: "15",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react16.Heading, {
    fontSize: "2xl"
  }, "Old Prescriptions"), /* @__PURE__ */ React.createElement(import_react16.UnorderedList, null, /* @__PURE__ */ React.createElement(import_react16.ListItem, {
    listStyleType: "none"
  }, "date 17-15-87")));
};
var Viewer = () => {
  const [d, setD] = (0, import_react20.useContext)(PresContext);
  const addRow = (e) => {
    let oldData = [];
    d.map((oldD) => {
      oldData.push(oldD);
    });
    oldData.push({
      nameDrug: "",
      dosageForm: "",
      mg: "",
      duration: "",
      id: new Date().getTime()
    });
    setD(oldData);
    console.log(d);
  };
  return /* @__PURE__ */ React.createElement(import_react16.Box, null, /* @__PURE__ */ React.createElement(import_react16.Box, null, /* @__PURE__ */ React.createElement(PresBox, null), /* @__PURE__ */ React.createElement(import_react16.Button, {
    onClick: (e) => {
      addRow(e);
    }
  }, "Add +"), /* @__PURE__ */ React.createElement(SlateEditor, null)));
};
var PresBox = () => {
  const [d, setD] = (0, import_react20.useContext)(PresContext);
  return /* @__PURE__ */ React.createElement(import_react16.Box, null, /* @__PURE__ */ React.createElement(import_react16.HStack, null), d.map((r) => {
    return /* @__PURE__ */ React.createElement(PresStack, {
      data: r
    });
  }));
};
var PresStack = ({ data }) => {
  const [preCon, setPreCon] = (0, import_react20.useContext)(PresContext);
  const updateData = (e, id, type) => {
    let oldD = preCon;
    let newList = [];
    oldD.map((oldd) => {
      if (oldd.id === id) {
        switch (type) {
          case "nameDrug":
            let tmpData = {
              nameDrug: e.target.value,
              dosageForm: oldd.dosageForm,
              mg: oldd.md,
              duration: oldd.duration,
              id: oldd.id
            };
            newList.push(tmpData);
            break;
          case "dosageForm":
            let tmpDataDose = {
              nameDrug: oldd.nameDrug,
              dosageForm: e,
              mg: oldd.md,
              duration: oldd.duration,
              id: oldd.id
            };
            newList.push(tmpDataDose);
            break;
        }
      } else {
        newList.push(oldd);
      }
    });
    console.log(newList, "NEW LIST");
    console.log(oldD, "OLD LIST");
    setPreCon(newList);
  };
  const drugFoodIntrect = [
    {
      drug: "aspirin",
      avoid: "FeverFew,ginkgo,green tea"
    },
    {
      drug: "lithium",
      avoid: "Significant increase or decrease in sodium intake"
    },
    {
      drug: "digoxin",
      avoid: "high-fiber food and meals"
    },
    {
      drug: "levodopa",
      avoid: "Excess protin"
    },
    {
      drugs: "warfarin",
      avoid: "Vitamin K-rich foods and supplements,Asian ginseng fecerfew,farlic,ginger,ginkgo,St.John's wort ,green tea"
    },
    {
      drugs: "tetracycline",
      avoid: "iron-rich food or supplements,calcium"
    }
  ];
  const [a2, setA] = (0, import_react20.useState)("");
  const updateAvoid = (e) => {
    console.log("Avouid Update", e.target.value);
    drugFoodIntrect.map((o) => {
      console.log(o, "MAP");
      if (e.target.value === o.drug) {
        setA(o.avoid);
        console.log(a2, "A");
      }
    });
  };
  return /* @__PURE__ */ React.createElement(import_react16.Box, {
    py: "3",
    w: "full",
    display: "flex",
    justifyContent: "space-around"
  }, /* @__PURE__ */ React.createElement(import_react16.VStack, null, /* @__PURE__ */ React.createElement(import_react16.Text, null, "Drug"), /* @__PURE__ */ React.createElement(import_react16.Input, {
    mx: "1",
    type: "text",
    placeholder: "name of Drug",
    value: data.nameDrug,
    onChange: (e) => {
      updateData(e, data.id, "nameDrug");
      updateAvoid(e);
    }
  }), a2 ? /* @__PURE__ */ React.createElement(import_react16.Text, {
    color: "tomato"
  }, "Drug Food Intrection : ", a2) : null), /* @__PURE__ */ React.createElement(import_react16.Spacer, null), /* @__PURE__ */ React.createElement(import_react16.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react16.Text, null, " Dosage Form"), /* @__PURE__ */ React.createElement(import_react17.Menu, null, /* @__PURE__ */ React.createElement(import_react17.MenuButton, {
    value: data.dosageForm,
    as: import_react16.Button,
    rightIcon: /* @__PURE__ */ React.createElement(import_ai.AiOutlineDown, null)
  }, data.dosageForm), /* @__PURE__ */ React.createElement(import_react17.MenuList, null, /* @__PURE__ */ React.createElement(import_react17.MenuItem, {
    onClick: (e) => updateData("ointments", data.id, "dosageForm")
  }, "Ointments"), /* @__PURE__ */ React.createElement(import_react17.MenuItem, {
    onClick: (e) => updateData("syrup", data.id, "dosageForm")
  }, "syrup"), /* @__PURE__ */ React.createElement(import_react17.MenuItem, {
    onClick: (e) => updateData("tablets", data.id, "dosageForm")
  }, "Tablet"), /* @__PURE__ */ React.createElement(import_react17.MenuItem, {
    onClick: (e) => updateData("powder", data.id, "dosageForm")
  }, "Powder"), /* @__PURE__ */ React.createElement(import_react17.MenuItem, {
    onClick: (e) => updateData("pills", data.id, "dosageForm")
  }, "Pills")))), /* @__PURE__ */ React.createElement(import_react16.Spacer, null), /* @__PURE__ */ React.createElement(import_react16.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react16.Text, null, "Dose mg"), /* @__PURE__ */ React.createElement(import_react18.NumberInput, {
    mx: "3",
    defaultValue: 15,
    value: data.mg,
    precision: 2,
    step: 0.2
  }, /* @__PURE__ */ React.createElement(import_react18.NumberInputField, null), /* @__PURE__ */ React.createElement(import_react18.NumberInputStepper, null, /* @__PURE__ */ React.createElement(import_react18.NumberIncrementStepper, null), /* @__PURE__ */ React.createElement(import_react18.NumberDecrementStepper, null)))), /* @__PURE__ */ React.createElement(import_react16.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react16.Text, null, "Duration"), /* @__PURE__ */ React.createElement(import_react16.HStack, null, /* @__PURE__ */ React.createElement(import_react19.PinInput, {
    defaultValue: data.duration
  }, /* @__PURE__ */ React.createElement(import_react19.PinInputField, null), /* @__PURE__ */ React.createElement(import_react19.PinInputField, null), /* @__PURE__ */ React.createElement(import_react19.PinInputField, null)))));
};
var dashboard_default2 = Index;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader2
});
init_react();
var import_react22 = require("@chakra-ui/react");
var import_react23 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());
var loader2 = async () => {
  const collectionUser = firestore.collection("users");
  let res = await collectionUser.doc().set({ first: "Jhson", last: "Doe", email: "rudra@gmial.com" });
  return { msg: "saved data", res };
};
function Index2() {
  const post = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ import_react23.default.createElement(import_react22.Box, {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.VStack, null, /* @__PURE__ */ import_react23.default.createElement(import_react22.Heading, {
    style: { fontSize: "5em" }
  }, "Health"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Heading, {
    style: { fontSize: "5em" }
  }, "equity"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Heading, {
    style: { fontSize: "5em" }
  }, "always")));
}
var routes_default = Index2;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\Login.tsx
var Login_exports = {};
__export(Login_exports, {
  action: () => action,
  default: () => Login_default
});
init_react();
var import_react24 = require("@chakra-ui/react");
var import_react25 = __toESM(require("react"));
var import_remix8 = __toESM(require_remix());
var action = async ({ request }) => {
  const form = await request.formData();
  let formAction = form.get("_action");
  let email = form.get("email");
  let password = form.get("password");
  let displayName = form.get("profileName");
  let centerName = form.get("centerName");
  const col = firestore.collection("rxLabsUsers");
  let msg = "";
  const collectionUser = firestore.collection("rxLabsUsers");
  let res;
  switch (formAction) {
    case "createUser":
      res = await collectionUser.doc().set({ email, displayName, password });
      msg = { status: true, res };
      break;
    case "loginUser":
      res = await collectionUser.get().then((snap) => {
        snap.forEach((d) => {
          if (email === d.data().email && password === d.data().password) {
            msg = { status: true, login: true, data: d.data() };
          }
        });
      }).catch((err) => {
        console.log(err);
      });
      break;
  }
  return msg.status ? msg : null;
};
function Login() {
  const ActionData = (0, import_remix8.useActionData)();
  const toast = (0, import_react24.useToast)();
  const [d, setD] = (0, import_react25.useContext)(LoginContext);
  (0, import_react25.useEffect)(() => {
    console.log(ActionData);
    if (ActionData) {
      setD(ActionData.data);
    }
  }, [ActionData]);
  return /* @__PURE__ */ import_react25.default.createElement(import_react24.Container, {
    maxH: "container.lg"
  }, /* @__PURE__ */ import_react25.default.createElement(import_react24.Box, {
    display: "flex",
    justifyContent: "center",
    mt: "30",
    alignItems: "center"
  }, /* @__PURE__ */ import_react25.default.createElement(import_react24.Box, {
    style: { width: "60vw" }
  }, /* @__PURE__ */ import_react25.default.createElement(import_react24.Tabs, null, /* @__PURE__ */ import_react25.default.createElement(import_react24.TabList, null, /* @__PURE__ */ import_react25.default.createElement(import_react24.Tab, null, "Login"), /* @__PURE__ */ import_react25.default.createElement(import_react24.Tab, null, "Create New User")), /* @__PURE__ */ import_react25.default.createElement(import_react24.TabPanels, null, /* @__PURE__ */ import_react25.default.createElement(import_react24.TabPanel, null, /* @__PURE__ */ import_react25.default.createElement(LoginUser, null)), /* @__PURE__ */ import_react25.default.createElement(import_react24.TabPanel, null, /* @__PURE__ */ import_react25.default.createElement(CreateNewUser, null)))))));
}
var LoginUser = () => {
  return /* @__PURE__ */ import_react25.default.createElement(import_react24.Box, null, /* @__PURE__ */ import_react25.default.createElement(import_remix8.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react25.default.createElement(import_react24.FormLabel, null, "Center"), /* @__PURE__ */ import_react25.default.createElement(import_react24.Input, {
    name: "center",
    type: "center",
    required: true,
    placeholder: "Digital Labs"
  }), /* @__PURE__ */ import_react25.default.createElement(import_react24.Spacer, null), /* @__PURE__ */ import_react25.default.createElement(import_react24.FormLabel, null, "Email"), /* @__PURE__ */ import_react25.default.createElement(import_react24.Input, {
    name: "email",
    type: "email",
    required: true,
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react25.default.createElement(import_react24.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react25.default.createElement(import_react24.FormLabel, null, "Password"), /* @__PURE__ */ import_react25.default.createElement(import_react24.Input, {
    name: "password",
    required: true,
    placeholder: "password",
    type: "password"
  }), /* @__PURE__ */ import_react25.default.createElement(import_react24.Spacer, null), /* @__PURE__ */ import_react25.default.createElement(import_react24.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react25.default.createElement(import_react24.Button, {
    name: "_action",
    value: "loginUser",
    type: "submit",
    colorScheme: "green"
  }, "Login"), /* @__PURE__ */ import_react25.default.createElement(import_react24.Spacer, null))));
};
var CreateNewUser = () => {
  const ActionData = (0, import_remix8.useActionData)();
  return /* @__PURE__ */ import_react25.default.createElement(import_react24.Box, null, /* @__PURE__ */ import_react25.default.createElement(import_remix8.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react25.default.createElement(import_react24.FormLabel, null, "Profile Name"), /* @__PURE__ */ import_react25.default.createElement(import_react24.Input, {
    type: "text",
    required: true,
    name: "profileName",
    placeholder: "Jhon Doe"
  }), /* @__PURE__ */ import_react25.default.createElement(import_react24.FormLabel, null, "Email"), /* @__PURE__ */ import_react25.default.createElement(import_react24.Input, {
    type: "email",
    required: true,
    name: "email",
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react25.default.createElement(import_react24.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react25.default.createElement(import_react24.FormLabel, null, "Password"), /* @__PURE__ */ import_react25.default.createElement(import_react24.Input, {
    required: true,
    placeholder: "password",
    name: "password",
    type: "password"
  }), /* @__PURE__ */ import_react25.default.createElement(import_react24.FormLabel, null, "Centre Name"), /* @__PURE__ */ import_react25.default.createElement(import_react24.Input, {
    type: "text",
    required: true,
    name: "centerName",
    placeholder: "Center Name"
  }), /* @__PURE__ */ import_react25.default.createElement(import_react24.Spacer, null), /* @__PURE__ */ import_react25.default.createElement(import_react24.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react25.default.createElement(import_react24.Button, {
    name: "_action",
    value: "createUser",
    type: "submit",
    colorScheme: "green"
  }, "Create Profile"), /* @__PURE__ */ import_react25.default.createElement(import_react24.Spacer, null))));
};
var Login_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "8cbc69ad", "entry": { "module": "/build/entry.client-IBURFPXU.js", "imports": ["/build/_shared/chunk-PYYGCPSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-2QMDI7TR.js", "imports": ["/build/_shared/chunk-3YWBN7K6.js", "/build/_shared/chunk-JWGZYV6Q.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Login": { "id": "routes/Login", "parentId": "root", "path": "Login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Login-3XRH2FPQ.js", "imports": ["/build/_shared/chunk-I3CML6S4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-NU6PWQBE.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-7XMBQSJU.js", "imports": ["/build/_shared/chunk-3YWBN7K6.js", "/build/_shared/chunk-I3CML6S4.js", "/build/_shared/chunk-JWGZYV6Q.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-45GZ6LJB.js", "imports": ["/build/_shared/chunk-I3CML6S4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8CBC69AD.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/Login": {
    id: "routes/Login",
    parentId: "root",
    path: "Login",
    index: void 0,
    caseSensitive: void 0,
    module: Login_exports
  }
};

// server.js
var app = (0, import_express.default)();
app.use((0, import_compression.default)());
app.disable("x-powered-by");
app.use("/build", import_express.default.static("public/build", { immutable: true, maxAge: "1y" }));
app.use(import_express.default.static("public/build", { maxAge: "1h" }));
app.use((0, import_morgan.default)("tiny"));
app.all("*", (0, import_express2.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
}));
var port = process.env.PORT || 3e3;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
/**
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCAiLi4vYXBwL2NvbnRleHQvbG9naW5EYXRhQ29udGV4dC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkLnRzeCIsICIuLi9hcHAvc2Vzc2lvbnMudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkXFxpbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvU2xhdGVFZGl0b3IudHN4IiwgIi4uL2FwcC9jb250ZXh0L3ByZXNDb250ZXh0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9GaW5kUGF0aWVudC50c3giLCAiLi4vYXBwL3V0aWxzL2ZpcmUuc2VydmVyLnRzIiwgInJvdXRlOkM6XFxVc2Vyc1xccnVkcmFcXERlc2t0b3BcXG9cXGxldHRlci5qc1xcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXHJ1ZHJhXFxEZXNrdG9wXFxvXFxsZXR0ZXIuanNcXGFwcFxccm91dGVzXFxMb2dpbi50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gXCJjb21wcmVzc2lvblwiO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIjtcclxuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9leHByZXNzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBzZXJ2ZXJCdWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xyXG5cclxuLy8gaHR0cDovL2V4cHJlc3Nqcy5jb20vZW4vYWR2YW5jZWQvYmVzdC1wcmFjdGljZS1zZWN1cml0eS5odG1sI2F0LWEtbWluaW11bS1kaXNhYmxlLXgtcG93ZXJlZC1ieS1oZWFkZXJcclxuYXBwLmRpc2FibGUoXCJ4LXBvd2VyZWQtYnlcIik7XHJcblxyXG4vLyBSZW1peCBmaW5nZXJwcmludHMgaXRzIGFzc2V0cyBzbyB3ZSBjYW4gY2FjaGUgZm9yZXZlci5cclxuYXBwLnVzZShcclxuICBcIi9idWlsZFwiLFxyXG4gIGV4cHJlc3Muc3RhdGljKFwicHVibGljL2J1aWxkXCIsIHsgaW1tdXRhYmxlOiB0cnVlLCBtYXhBZ2U6IFwiMXlcIiB9KVxyXG4pO1xyXG5cclxuLy8gRXZlcnl0aGluZyBlbHNlIChsaWtlIGZhdmljb24uaWNvKSBpcyBjYWNoZWQgZm9yIGFuIGhvdXIuIFlvdSBtYXkgd2FudCB0byBiZVxyXG4vLyBtb3JlIGFnZ3Jlc3NpdmUgd2l0aCB0aGlzIGNhY2hpbmcuXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBtYXhBZ2U6IFwiMWhcIiB9KSk7XHJcblxyXG5hcHAudXNlKG1vcmdhbihcInRpbnlcIikpO1xyXG5cclxuYXBwLmFsbChcclxuICBcIipcIixcclxuICBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XHJcbiAgICBidWlsZDogc2VydmVyQnVpbGQsXHJcbiAgICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVlxyXG4gIH0pXHJcbik7XHJcblxyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYEV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxydWRyYVxcXFxEZXNrdG9wXFxcXG9cXFxcbGV0dGVyLmpzXFxcXGFwcFxcXFxlbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvdXRlc1xcXFxkYXNoYm9hcmQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvdXRlc1xcXFxkYXNoYm9hcmRcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXExvZ2luLnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvZGFzaGJvYXJkXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9kYXNoYm9hcmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZGFzaGJvYXJkXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL0xvZ2luXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9Mb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJMb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxyXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXHJcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXHJcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxyXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XHJcbikge1xyXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxyXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cclxuICApO1xyXG5cclxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcclxuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxyXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXHJcbiAgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7XHJcbiAgTGlua3MsXHJcbiAgTGl2ZVJlbG9hZCxcclxuICBNZXRhLFxyXG4gIE91dGxldCxcclxuICBTY3JpcHRzLFxyXG4gICAgXHJcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXHJcbn0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyLCBDb2xvck1vZGVTY3JpcHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbi8vIDEuIGltcG9ydCBgZXh0ZW5kVGhlbWVgIGZ1bmN0aW9uXHJcbmltcG9ydCB7IGV4dGVuZFRoZW1lLCB0eXBlIFRoZW1lQ29uZmlnIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgTG9naW5Db250ZXh0LCBMb2dpbkNvbnRleHRQcm92aWRlciB9IGZyb20gXCIuL2NvbnRleHQvbG9naW5EYXRhQ29udGV4dFwiO1xyXG5cclxuLy8gMi4gQWRkIHlvdXIgY29sb3IgbW9kZSBjb25maWdcclxuY29uc3QgY29uZmlnOiBUaGVtZUNvbmZpZyA9IHtcclxuICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZSxcclxufVxyXG5cclxuLy8gMy4gZXh0ZW5kIHRoZSB0aGVtZVxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHsgY29uZmlnIH0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4geyB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIgfTtcclxufTtcclxuXHJcbmNvbnN0IERvY3VtZW50ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Ym9keT5cclxuICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17XCJkYXJrXCJ9IC8+XHJcbiAgICAgIDxDaGFrcmFQcm92aWRlcj5cclxuICAgICAgPExvZ2luQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPE91dGxldCAvPlxyXG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAgPExpdmVSZWxvYWQgLz5cclxuICAgICAgXHJcbiAgICAgICAgPC9Mb2dpbkNvbnRleHRQcm92aWRlcj4gICAgICBcclxuICAgICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICAgIDwvYm9keT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cclxuICAgICAgPGhlYWQ+XHJcbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICA8TGlua3MgLz5cclxuICAgICAgPC9oZWFkPlxyXG4gICAgICA8RG9jdW1lbnQgLz5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBCb3gsIEhTdGFjaywgTGlzdEl0ZW0sIFVub3JkZXJlZExpc3QsIFdyYXBJdGVtICxUZXh0LCBCdXR0b259IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcclxuaW1wb3J0IHsgTG9naW5Db250ZXh0IH0gZnJvbSAnfi9jb250ZXh0L2xvZ2luRGF0YUNvbnRleHQnXHJcbmltcG9ydCB7IEF2YXRhciwgQXZhdGFyQmFkZ2UsIEF2YXRhckdyb3VwIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHtcclxuICBQb3BvdmVyLFxyXG4gIFBvcG92ZXJUcmlnZ2VyLFxyXG4gIFBvcG92ZXJDb250ZW50LFxyXG4gIFBvcG92ZXJIZWFkZXIsXHJcbiAgUG9wb3ZlckJvZHksXHJcbiAgUG9wb3ZlckZvb3RlcixcclxuICBQb3BvdmVyQXJyb3csXHJcbiAgUG9wb3ZlckNsb3NlQnV0dG9uLFxyXG4gIFBvcG92ZXJBbmNob3IsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IGUgZnJvbSAnZXhwcmVzcydcclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG5cclxuICBjb25zdCBbZCxzZXREXSA9IHVzZUNvbnRleHQoTG9naW5Db250ZXh0KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEhTdGFjayBweT1cIjFcIiBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9IGJhY2tncm91bmQ9e1wiZ3JlZW4uNTAwXCJ9PlxyXG4gICAgICAgIDxVbm9yZGVyZWRMaXN0IGRpc3BsYXk9e1wiZmxleFwifT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBwPVwiM1wiIGNvbG9yPXtcIndoaXRlXCJ9ICBsaXN0U3R5bGVUeXBlPXtcIm5vbmVcIn0gPjxMaW5rIHRvPVwiL1wiPkxhYnMgXHVEODNEXHVERDJDPC9MaW5rPjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gcD1cIjNcIiBjb2xvcj17XCJ3aGl0ZVwifSBsaXN0U3R5bGVUeXBlPXtcIm5vbmVcIn0gPjxMaW5rIHRvPVwiL2Rhc2hib2FyZFwiPkRhc2hib2FyZDwvTGluaz48L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPExpc3RJdGVtIHA9XCIzXCIgY29sb3I9e1wid2hpdGVcIn0gbGlzdFN0eWxlVHlwZT17XCJub25lXCJ9ID48TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxyXG4gICAgICAgIDxVbm9yZGVyZWRMaXN0IGRpc3BsYXk9e1wiZmxleFwifT5cclxuICAgICAgICA8UG9wb3Zlcj5cclxuICA8UG9wb3ZlclRyaWdnZXI+XHJcbiAgPFdyYXBJdGVtPlxyXG4gICAgPEhTdGFjayBtcj1cIjNcIiBqdXN0aWZ5Q29udGVudD17XCJmbGV4LXN0YXJ0XCJ9IGFsaWduSXRlbXM9XCJiYXNlbGluZVwiPlxyXG4gICAgICAgICB7XHJcbiAgICAgIGQuZW1haWwgIT0gXCJcIiA/IDxBdmF0YXIgIG5hbWU9e2QuZGlzcGxheU5hbWV9ICAvPiA6IG51bGwgXHJcbiAgICB9XHJcbiAgICA8VGV4dD57ZC5lbWFpbH08L1RleHQ+XHJcbiAgICA8L0hTdGFjaz5cclxuICA8L1dyYXBJdGVtPlxyXG4gICAgXHJcbiAgPC9Qb3BvdmVyVHJpZ2dlcj5cclxuICA8UG9wb3ZlckNvbnRlbnQ+XHJcbiAgICA8UG9wb3ZlckFycm93IC8+XHJcbiAgICA8UG9wb3ZlckNsb3NlQnV0dG9uIC8+XHJcbiAgICA8UG9wb3ZlckhlYWRlcj5Db25maXJtYXRpb24hPC9Qb3BvdmVySGVhZGVyPlxyXG4gICAgPFBvcG92ZXJCb2R5PkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBoYXZlIHRoYXQgcGFyYWNldGFtb2wgPzwvUG9wb3ZlckJvZHk+XHJcbiAgPC9Qb3BvdmVyQ29udGVudD5cclxuPC9Qb3BvdmVyPlxyXG4gICAgICBcclxuICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICA8L0hTdGFjaz4gIFxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXIiLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbkNvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4obnVsbCk7XHJcbi8vIGltcG9ydCB1dWlkIGZyb20gXCJ1dWlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTG9naW5Db250ZXh0UHJvdmlkZXIgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIFxyXG5cclxuICBjb25zdCBtYWluRGF0YSA9IFt7XHJcbiAgICAgIG5hbWVEcnVnOlwicGFyYWNldGFtb2xcIixcclxuICAgICAgZG9zYWdlRm9ybTpcInN5cnVwXCIsXHJcbiAgICAgIG1nOlwiMTZcIixcclxuICAgICAgZHVyYXRpb24gOlwiMTAxXCIsXHJcbiAgfSx7XHJcbiAgICAgIG5hbWVEcnVnOlwid2FyZmFyaW5cIixcclxuICAgICAgZG9zYWdlRm9ybTpcImxvdGlvblwiLFxyXG4gICAgICBtZzpcIjE2XCIsXHJcbiAgICAgIGR1cmF0aW9uIDpcIjExMVwiXHJcbiAgfV1cclxuXHJcbi8vICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobWFpbkRhdGEpXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICBlbWFpbDpcIlwiLFxyXG4gICAgICBkaXNwbGF5TmFtZTpcIlwiXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9naW5Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbZGF0YSwgc2V0RGF0YV19PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0xvZ2luQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCAiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIENvbnRhaW5lcixcclxuICBEaXZpZGVyLFxyXG4gIEhlYWRpbmcsXHJcbiAgSFN0YWNrLFxyXG4gIExpc3RJdGVtLFxyXG4gIFRleHQsXHJcbiAgVW5vcmRlcmVkTGlzdCxcclxuICBWU3RhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBqc29uLCBMaW5rLCBMaW5rcywgTG9hZGVyRnVuY3Rpb24sIE91dGxldCwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJ+L3Nlc3Npb25zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRlcjpMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7cmVxdWVzdH0pID0+IHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihcclxuICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIilcclxuICApO1xyXG4gIGlmIChzZXNzaW9uLmhhcyhcInVzZXJTZXNzaW9uXCIpKSB7XHJcbiAgICAvLyBSZWRpcmVjdCB0byB0aGUgaG9tZSBwYWdlIGlmIHRoZXkgYXJlIGFscmVhZHkgc2lnbmVkIGluLlxyXG4gICAgXHJcbiAgICByZXR1cm4ge3Nob3dQYWdlOnRydWV9XHJcbiAgfVxyXG4gIHJldHVybiB7c2hvd1BhZ2U6ZmFsc2V9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuXHJcbiAgY29uc3Qge3Nob3dQYWdlfSA9IHVzZUxvYWRlckRhdGEoKSBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICB7Lyoge1xyXG4gICAgICBKU09OLnN0cmluZ2lmeShzaG93UGFnZSlcclxuICAgIH0gKi99XHJcbiAgICB7XHJcbiAgICAgIHRydWUgPyAgPFByaXZhdGVQYWdlIC8+IDogPE5vdFNpZ25JblBhZ2UgLz5cclxuICAgIH1cclxuXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBOb3RTaWduSW5QYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICAgIDxIZWFkaW5nPlVzZXIgTm90IExvZ2VkIGluPC9IZWFkaW5nPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBQcml2YXRlUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4oXHJcbiAgICA8Q29udGFpbmVyIG1heFc9XCJvbnRhaW5lci5sZ1wiPlxyXG4gICAgPEhlYWRpbmcgcHk9XCIzXCI+UnggTGFiczwvSGVhZGluZz5cclxuICAgIFxyXG4gICAgICBcclxuICAgICAgey8qIDxEaXZpZGVyIHNpemU9e1wiM1wifSBjb2xvclNjaGVtZT1cImdyZWVuXCIgb3JpZW50YXRpb249J3ZlcnRpY2FsJyAvPiAqL31cclxuICAgICAgPE91dGxldCAvPlxyXG4gICAgXHJcbiAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iLCAiaW1wb3J0IHtjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZX0gZnJvbSBcInJlbWl4XCJcclxuXHJcblxyXG5leHBvcnQgY29uc3Qge2dldFNlc3Npb24sY29tbWl0U2Vzc2lvbixkZXN0cm95U2Vzc2lvbn0gID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xyXG4gICAgY29va2llOntcclxuICAgICAgICBuYW1lOlwiX19zZXNzaW9uXCJcclxuICAgIH1cclxufSlcclxuXHJcblxyXG4iLCAiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIERpdmlkZXIsXHJcbiAgSGVhZGluZyxcclxuICBIZWFkaW5nUHJvcHMsXHJcbiAgSFN0YWNrLFxyXG4gIElucHV0LFxyXG4gIExpc3RJdGVtLFxyXG4gIE9taXRDb21tb25Qcm9wcyxcclxuICBPcmRlcmVkTGlzdCxcclxuICBTcGFjZXIsXHJcbiAgVGV4dCxcclxuICBVbm9yZGVyZWRMaXN0LFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IFNsYXRlRWRpdG9yIGZyb20gXCJ+L2NvbXBvbmVudHMvU2xhdGVFZGl0b3JcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgTWVudSxcclxuICBNZW51QnV0dG9uLFxyXG4gIE1lbnVMaXN0LFxyXG4gIE1lbnVJdGVtLFxyXG4gIE1lbnVJdGVtT3B0aW9uLFxyXG4gIE1lbnVHcm91cCxcclxuICBNZW51T3B0aW9uR3JvdXAsXHJcbiAgTWVudURpdmlkZXIsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBOdW1iZXJJbnB1dCxcclxuICBOdW1iZXJJbnB1dEZpZWxkLFxyXG4gIE51bWJlcklucHV0U3RlcHBlcixcclxuICBOdW1iZXJJbmNyZW1lbnRTdGVwcGVyLFxyXG4gIE51bWJlckRlY3JlbWVudFN0ZXBwZXIsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lRG93biwgQWlGaWxsV2FybmluZyB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuaW1wb3J0IHsgUGluSW5wdXQsIFBpbklucHV0RmllbGQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcmVzQ29udGV4dCwgUHJlc0NvbnRleHRQcm92aWRlciB9IGZyb20gXCJ+L2NvbnRleHQvcHJlc0NvbnRleHRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQnJlYWRjcnVtYixcclxuICBCcmVhZGNydW1iSXRlbSxcclxuICBCcmVhZGNydW1iTGluayxcclxuICBCcmVhZGNydW1iU2VwYXJhdG9yLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBGaW5kUGF0aWVudCBmcm9tIFwifi9jb21wb25lbnRzL0ZpbmRQYXRpZW50XCI7XHJcbmltcG9ydCBNYXBGaW5kZXIgZnJvbSBcIn4vY29tcG9uZW50cy9NYXBGaW5kZXJcIjtcclxuaW1wb3J0IHtCaUFycm93QmFja30gZnJvbSBcInJlYWN0LWljb25zL2JpXCJcclxuaW1wb3J0IHsgZHJ1Z0Zvb2RJbnRyZWN0IH0gZnJvbSBcIn4vdXRpbHMvZHJ1Zy5zZXJ2ZXJcIjtcclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgLy8gY29uc3QgW2Qsc2V0RF0gPSB1c2VDb250ZXh0KFByZXNDb250ZXh0KVxyXG5cclxuICAvLyBjb25zdCBhZGRNYWluRGF0YSA9IChlOmFueSkgPT4ge1xyXG4gIC8vIGNvbnN0IG8gPSB7XHJcbiAgLy8gICBuYW1lRHJ1ZzogXCJcIixcclxuICAvLyAgIGRvc2FnZUZvcm06IFwiXCIsXHJcbiAgLy8gICBtZzogXCJcIixcclxuICAvLyAgIGR1cmF0aW9uOiBcIlwiLFxyXG4gIC8vIH1cclxuXHJcbiAgLy8gbGV0IGxhc3QgPSBkXHJcblxyXG4gIC8vIGxhc3QucHVzaChvKVxyXG5cclxuICAvLyBzZXREKGxhc3QpXHJcblxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgW3Nob3dQYWdlLCBzZXRTaG93UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcmVzQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDxCdXR0b24gbXk9XCIzXCIgbWI9XCIzXCI+XHJcbiAgICAgICAgICBDcmVhdGUgTmV3e1wiIFwifVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgPEJveD5cclxuICAgICAgICAgIDxCcmVhZGNydW1iIHB5PVwiM1wiPlxyXG4gICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEJyZWFkY3J1bWJMaW5rIGNvbG9yPVwiZ3JlZW5cIiBvbkNsaWNrPXsoZSkgPT4gc2V0U2hvd1BhZ2UoMCl9PlxyXG4gICAgICAgICAgICAgPEhTdGFjaz4gIDxCaUFycm93QmFjayAvPiAgPFRleHQ+IEZpbmQgUGF0aWVudDwvVGV4dD48L0hTdGFjaz5cclxuICAgICAgICAgICAgICA8L0JyZWFkY3J1bWJMaW5rPlxyXG4gICAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgICB7c2hvd1BhZ2UgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgPEJyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWJMaW5rIGhyZWY9XCIjXCI+bmFtZSBvZiBQYXRpZW50PC9CcmVhZGNydW1iTGluaz5cclxuICAgICAgICAgICAgICA8L0JyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICAgIHsvKiA8TWFwRmluZGVyIC8+ICovfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIHtzaG93UGFnZSA9PT0gMSA/IChcclxuICAgICAgICAgIDxWU3RhY2sganVzdGlmeUNvbnRlbnQ9e1wiZmxleC1zdGFydFwifSBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICA8SFN0YWNrXHJcbiAgICAgICAgICAgICAgdz1cImZ1bGxcIlxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn1cclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Vmlld2VyIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxPbGRQcmVzY3JpcHRpb25zIC8+XHJcbiAgICAgICAgICAgIDwvSFN0YWNrID5cclxuPEhTdGFjayBtdD1cIjhcIiBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9IGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxyXG4gIFxyXG48QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5wcmludCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcmludFwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgXHVEODNEXHVEREE4XHVGRTBGXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICB7LyogPEJ1dHRvbj5TZWFyY2ggTmVhcmVzdCBTdG9yZTwvQnV0dG9uPiAqL31cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9e1wiZ3JlZW5cIn0+U2F2ZSBQcmVzY3JpcHRpb24gPC9CdXR0b24+XHJcbjwvSFN0YWNrPlxyXG4gICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxGaW5kUGF0aWVudCAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvUHJlc0NvbnRleHRQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IE9sZFByZXNjcmlwdGlvbnMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxWU3RhY2sgc3R5bGU9e3ttYXJnaW5SaWdodDonMTV2dyd9fSBwbD1cIjlcIiBwdD1cIjNcIiBtcj1cIjE1XCIgYWxpZ25JdGVtcz17XCJmbGV4LXN0YXJ0XCJ9PlxyXG4gICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjJ4bFwiPk9sZCBQcmVzY3JpcHRpb25zPC9IZWFkaW5nPlxyXG4gICAgICA8VW5vcmRlcmVkTGlzdD5cclxuICAgICAgICA8TGlzdEl0ZW0gbGlzdFN0eWxlVHlwZT1cIm5vbmVcIj5kYXRlIDE3LTE1LTg3PC9MaXN0SXRlbT5cclxuICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxyXG4gICAgPC9WU3RhY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFZpZXdlciA9ICgpID0+IHtcclxuICBjb25zdCBbZCwgc2V0RF0gPSB1c2VDb250ZXh0KFByZXNDb250ZXh0KTtcclxuICBjb25zdCBhZGRSb3cgPSAoZTogYW55KSA9PiB7XHJcbiAgICBsZXQgb2xkRGF0YSA9IFtdO1xyXG5cclxuICAgIGQubWFwKChvbGREOiBhbnkpID0+IHtcclxuICAgICAgb2xkRGF0YS5wdXNoKG9sZEQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgb2xkRGF0YS5wdXNoKHtcclxuICAgICAgbmFtZURydWc6IFwiXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06IFwiXCIsXHJcbiAgICAgIG1nOiBcIlwiLFxyXG4gICAgICBkdXJhdGlvbjogXCJcIixcclxuICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0RChvbGREYXRhKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8UHJlc0JveCAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZFJvdyhlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkICtcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxTbGF0ZUVkaXRvciAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByZXNCb3ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW2QsIHNldERdID0gdXNlQ29udGV4dChQcmVzQ29udGV4dCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICB7LyogPFByZXNTdGFjayAvPlxyXG4gICAgICA8UHJlc1N0YWNrIC8+XHJcbiAgICAgIDxQcmVzU3RhY2sgLz4gKi99XHJcbjxIU3RhY2s+XHJcbjwvSFN0YWNrPlxyXG4gICAgICB7ZC5tYXAoKHI6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8UHJlc1N0YWNrIGRhdGE9e3J9IC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmVzU3RhY2sgPSAoeyBkYXRhIH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IFtwcmVDb24sIHNldFByZUNvbl0gPSB1c2VDb250ZXh0KFByZXNDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlRGF0YSA9IChlOiBhbnksIGlkOiBhbnksIHR5cGU6IGFueSkgPT4ge1xyXG4gICAgbGV0IG9sZEQgPSBwcmVDb247XHJcbiAgICBsZXQgbmV3TGlzdDogYW55ID0gW107XHJcbiAgICBvbGRELm1hcCgob2xkZDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChvbGRkLmlkID09PSBpZCkge1xyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgY2FzZSBcIm5hbWVEcnVnXCI6XHJcbiAgICAgICAgICAgIGxldCB0bXBEYXRhID0ge1xyXG4gICAgICAgICAgICAgIG5hbWVEcnVnOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICBkb3NhZ2VGb3JtOiBvbGRkLmRvc2FnZUZvcm0sXHJcbiAgICAgICAgICAgICAgbWc6IG9sZGQubWQsXHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IG9sZGQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgaWQ6IG9sZGQuaWQsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBuZXdMaXN0LnB1c2godG1wRGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZG9zYWdlRm9ybVwiOlxyXG4gICAgICAgICAgICAgIGxldCB0bXBEYXRhRG9zZSA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWVEcnVnOiBvbGRkLm5hbWVEcnVnLFxyXG4gICAgICAgICAgICAgICAgZG9zYWdlRm9ybTogZSxcclxuICAgICAgICAgICAgICAgIG1nOiBvbGRkLm1kLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IG9sZGQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICBpZDogb2xkZC5pZCxcclxuICAgICAgICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgICAgICAgIG5ld0xpc3QucHVzaCh0bXBEYXRhRG9zZSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdMaXN0LnB1c2gob2xkZCk7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKG5ld0xpc3QsXCJORVcgTElTVFwiKTtcclxuICAgIGNvbnNvbGUubG9nKG9sZEQsXCJPTEQgTElTVFwiKTtcclxuICAgIHNldFByZUNvbihuZXdMaXN0KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRydWdGb29kSW50cmVjdCA9IFtcclxuICAgIHtcclxuICAgICAgICBkcnVnOlwiYXNwaXJpblwiLFxyXG4gICAgICAgIGF2b2lkOlwiRmV2ZXJGZXcsZ2lua2dvLGdyZWVuIHRlYVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRydWc6XCJsaXRoaXVtXCIsXHJcbiAgICAgICAgYXZvaWQ6XCJTaWduaWZpY2FudCBpbmNyZWFzZSBvciBkZWNyZWFzZSBpbiBzb2RpdW0gaW50YWtlXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZHJ1ZzpcImRpZ294aW5cIixcclxuICAgICAgICBhdm9pZDpcImhpZ2gtZmliZXIgZm9vZCBhbmQgbWVhbHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZHJ1ZzpcImxldm9kb3BhXCIsXHJcbiAgICAgIGF2b2lkOlwiRXhjZXNzIHByb3RpblwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkcnVnczpcIndhcmZhcmluXCIsXHJcbiAgICBhdm9pZDpcIlZpdGFtaW4gSy1yaWNoIGZvb2RzIGFuZCBzdXBwbGVtZW50cyxBc2lhbiBnaW5zZW5nIGZlY2VyZmV3LGZhcmxpYyxnaW5nZXIsZ2lua2dvLFN0LkpvaG4ncyB3b3J0ICxncmVlbiB0ZWFcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgZHJ1Z3M6XCJ0ZXRyYWN5Y2xpbmVcIixcclxuICAgIGF2b2lkOlwiaXJvbi1yaWNoIGZvb2Qgb3Igc3VwcGxlbWVudHMsY2FsY2l1bVwiXHJcbiAgfVxyXG5dXHJcblxyXG5cclxuLy8gY29uc3QgZHJ1Z0RydWdJbnRyZWN0aW9uID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGRydWc6W1wiZmx1b3hldGluZVwiLFwicGhlbmVsemluZVwiXSxcclxuLy8gICAgIGRydWc6W1wiZGlnb3hpblwiLFwicXVpbmlkaW5lXCJdLFxyXG4vLyAgICAgZHJ1ZzpbXCJ3YXJmYXJpblwiLFwiZGlmbHVuaXNhbFwiXSxcclxuLy8gICB9XHJcbi8vIF1cclxuXHJcbmNvbnN0IFthLHNldEFdID0gdXNlU3RhdGUoXCJcIilcclxuY29uc3QgdXBkYXRlQXZvaWQgPSAoZTphbnkpID0+IHtcclxuICBjb25zb2xlLmxvZyhcIkF2b3VpZCBVcGRhdGVcIixlLnRhcmdldC52YWx1ZSk7XHJcbiAgXHJcbiAgZHJ1Z0Zvb2RJbnRyZWN0Lm1hcChvID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG8sXCJNQVBcIik7XHJcbiAgICBcclxuICAgIGlmKGUudGFyZ2V0LnZhbHVlID09PSBvLmRydWcpe1xyXG4gICAgICBzZXRBKG8uYXZvaWQpXHJcbiAgICAgIGNvbnNvbGUubG9nKGEsXCJBXCIpO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9KSAgXHJcbn1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggcHk9XCIzXCIgdz1cImZ1bGxcIiBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYXJvdW5kXCI+XHJcbiAgICAgIHsvKiA8VGV4dCBjb2xvcj1cInJlZCAgXCI+PEFpRmlsbFdhcm5pbmcgLz48L1RleHQ+ICovfVxyXG4gICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KHByZUNvbil9ICovfVxyXG4gICAgICA8VlN0YWNrPlxyXG4gICAgICAgIDxUZXh0PkRydWc8L1RleHQ+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBteD1cIjFcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lIG9mIERydWdcIlxyXG4gICAgICAgICAgdmFsdWU9e2RhdGEubmFtZURydWd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHt1cGRhdGVEYXRhKGUsIGRhdGEuaWQsIFwibmFtZURydWdcIik7dXBkYXRlQXZvaWQoZSl9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICB7XHJcbiAgICAgICAgIGEgPyA8VGV4dCBjb2xvcj17XCJ0b21hdG9cIn0+XHJcbiAgICAgICAgIERydWcgRm9vZCBJbnRyZWN0aW9uIDoge1xyXG4gICAgICAgICAgIGFcclxuICAgICAgICAgfVxyXG4gICAgICAgIDwvVGV4dD4gOiBudWxsXHJcbiAgICAgICB9XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgICA8U3BhY2VyIC8+XHJcbiAgICAgIDxWU3RhY2sgbXg9XCIyXCI+XHJcbiAgICAgICAgPFRleHQ+IERvc2FnZSBGb3JtPC9UZXh0PlxyXG4gICAgICAgIDxNZW51XHJcbiAgICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudUJ1dHRvblxyXG4gICAgICAgICAgICB2YWx1ZT17ZGF0YS5kb3NhZ2VGb3JtfVxyXG4gICAgICAgICAgICBhcz17QnV0dG9ufVxyXG4gICAgICAgICAgICByaWdodEljb249ezxBaU91dGxpbmVEb3duIC8+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YS5kb3NhZ2VGb3JtfVxyXG4gICAgICAgICAgPC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgPE1lbnVMaXN0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwib2ludG1lbnRzXCIsIGRhdGEuaWQsIFwiZG9zYWdlRm9ybVwiKX0+T2ludG1lbnRzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2UgPT4gdXBkYXRlRGF0YShcInN5cnVwXCIsIGRhdGEuaWQsIFwiZG9zYWdlRm9ybVwiKX0+c3lydXA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwidGFibGV0c1wiLCBkYXRhLmlkLCBcImRvc2FnZUZvcm1cIil9PlRhYmxldDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtlID0+IHVwZGF0ZURhdGEoXCJwb3dkZXJcIiwgZGF0YS5pZCwgXCJkb3NhZ2VGb3JtXCIpfT5Qb3dkZXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwicGlsbHNcIiwgZGF0YS5pZCwgXCJkb3NhZ2VGb3JtXCIpfT5QaWxsczwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgPFZTdGFjayBteD1cIjJcIj5cclxuICAgICAgICA8VGV4dD5Eb3NlIG1nPC9UZXh0PlxyXG4gICAgICAgIDxOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgbXg9XCIzXCJcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MTV9XHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5tZ31cclxuICAgICAgICAgIHByZWNpc2lvbj17Mn1cclxuICAgICAgICAgIHN0ZXA9ezAuMn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TnVtYmVySW5wdXRGaWVsZCAvPlxyXG4gICAgICAgICAgPE51bWJlcklucHV0U3RlcHBlcj5cclxuICAgICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgICAgPE51bWJlckRlY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgIDwvTnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgIDwvTnVtYmVySW5wdXQ+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG5cclxuICAgICAgey8qIFBpbiBJbnB1dCAqL31cclxuICAgICAgPFZTdGFjayBteD1cIjJcIj5cclxuICAgICAgICA8VGV4dD5EdXJhdGlvbjwvVGV4dD5cclxuICAgICAgICA8SFN0YWNrPlxyXG4gICAgICAgICAgPFBpbklucHV0IGRlZmF1bHRWYWx1ZT17ZGF0YS5kdXJhdGlvbn0+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICA8L1BpbklucHV0PlxyXG4gICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwgImltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgQm94LCBCdXR0b24sIEhlYWRpbmcsIEhTdGFjaywgSW5wdXQsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgZSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgaXNIb3RrZXkgZnJvbSBcImlzLWhvdGtleVwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VFZGl0b3IsXHJcbiAgQmFzZUVsZW1lbnQsXHJcbiAgY3JlYXRlRWRpdG9yLFxyXG4gIERlc2NlbmRhbnQsXHJcbiAgRWRpdG9yLFxyXG4gIEVsZW1lbnQgYXMgU2xhdGVFbGVtZW50LFxyXG4gIFRyYW5zZm9ybXMsXHJcbn0gZnJvbSBcInNsYXRlXCI7XHJcbmltcG9ydCB7IEhpc3RvcnlFZGl0b3IsIHdpdGhIaXN0b3J5IH0gZnJvbSBcInNsYXRlLWhpc3RvcnlcIjtcclxuaW1wb3J0IHsgUmVhY3RFZGl0b3IsIFNsYXRlLCB3aXRoUmVhY3QsIEVkaXRhYmxlIH0gZnJvbSBcInNsYXRlLXJlYWN0XCI7XHJcblxyXG5jb25zdCBIT1RLRVlTOiBhbnkgPSB7XHJcbiAgXCJtb2QrYlwiOiBcImJvbGRcIixcclxuICBcIm1vZCtpXCI6IFwiaXRhbGljXCIsXHJcbiAgXCJtb2QrdVwiOiBcInVuZGVybGluZVwiLFxyXG4gIFwibW9kK2BcIjogXCJjb2RlXCIsXHJcbn07XHJcblxyXG5jb25zdCBMSVNUX1RZUEVTID0gW1wibnVtYmVyZWQtbGlzdFwiLCBcImJ1bGxldGVkLWxpc3RcIl07XHJcbmltcG9ydCB7XHJcbiAgRmFCb2xkLFxyXG4gIEZhSXRhbGljLFxyXG4gIEZhVW5kZXJsaW5lLFxyXG4gIEZhQ29kZSxcclxuICBGYUhlYWRpbmcsXHJcbn0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7QmlSZWZyZXNofSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIlxyXG5cclxudHlwZSBDdXN0b21UZXh0ID0geyB0ZXh0OiBzdHJpbmcgfTtcclxudHlwZSBDdXN0b21FbGVtZW50ID0geyB0eXBlOiBcInBhcmFncmFwaFwiOyBjaGlsZHJlbjogQ3VzdG9tVGV4dFtdIH07XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcInNsYXRlXCIge1xyXG4gIGludGVyZmFjZSBDdXN0b21UeXBlcyB7XHJcbiAgICBFZGl0b3I6IEJhc2VFZGl0b3IgJiBSZWFjdEVkaXRvciAmIEhpc3RvcnlFZGl0b3I7XHJcbiAgICBFbGVtZW50OiBDdXN0b21FbGVtZW50O1xyXG4gICAgVGV4dDogQ3VzdG9tVGV4dDtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xhdGVFZGl0b3IoKSB7XHJcbiAgY29uc3QgaW5pdGlhbFZhbHVlOiBEZXNjZW5kYW50W10gPSBbXHJcbiAgICAgIC8vICAge1xyXG4gICAgICAvLyAgIHR5cGU6IFwicGFyYWdyYXBoXCIsXHJcbiAgICAgIC8vICAgY2hpbGRyZW46IFt7IHRleHQ6IFwiQSBsaW5lIG9mIGNvbW9yYmlkaXR5XCIgfV0sXHJcbiAgICAgIC8vIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZTxEZXNjZW5kYW50W10+KGluaXRpYWxWYWx1ZSk7XHJcbiAgY29uc3QgcmVuZGVyRWxlbWVudCA9IHVzZUNhbGxiYWNrKChwcm9wcykgPT4gPEVsZW1lbnQgey4uLnByb3BzfSAvPiwgW10pO1xyXG4gIGNvbnN0IHJlbmRlckxlYWYgPSB1c2VDYWxsYmFjaygocHJvcHMpID0+IDxMZWFmIHsuLi5wcm9wc30gLz4sIFtdKTtcclxuICBjb25zdCBlZGl0b3IgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gd2l0aEhpc3Rvcnkod2l0aFJlYWN0KGNyZWF0ZUVkaXRvcigpIGFzIFJlYWN0RWRpdG9yKSksXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIHsvKiA8SFN0YWNrIHNwYWNpbmc9e1wiMlwifSBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj4gKi99XHJcbiAgICAgICAgPEhTdGFjayBzcGFjaW5nPXtcIjJcIn0+XHJcbiAgICAgICAgIDxIU3RhY2s+XHJcbiAgICAgICAgIDxNYXJrQnV0dG9uXHJcbiAgICAgICAgICAgIGU9e2VkaXRvcn1cclxuICAgICAgICAgICAgbXI9XCIxXCJcclxuICAgICAgICAgICAgc2l6ZT17XCJzbVwifVxyXG4gICAgICAgICAgICBpY29uPXs8RmFCb2xkIC8+fVxyXG4gICAgICAgICAgICBmb3JtYXQ9e1wiYm9sZFwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCb2xkXHJcbiAgICAgICAgICA8L01hcmtCdXR0b24+XHJcbiAgICAgICAgICA8TWFya0J1dHRvblxyXG4gICAgICAgICAgICBlPXtlZGl0b3J9XHJcbiAgICAgICAgICAgIGljb249ezxGYUl0YWxpYyAvPn1cclxuICAgICAgICAgICAgZm9ybWF0PXtcIml0YWxpY1wifVxyXG4gICAgICAgICAgICBteD1cIjFcIlxyXG4gICAgICAgICAgICBzaXplPXtcInNtXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEl0YWxpY1xyXG4gICAgICAgICAgPC9NYXJrQnV0dG9uPlxyXG4gICAgICAgICAgPE1hcmtCdXR0b25cclxuICAgICAgICAgICAgZT17ZWRpdG9yfVxyXG4gICAgICAgICAgICBpY29uPXs8RmFDb2RlIC8+fVxyXG4gICAgICAgICAgICBmb3JtYXQ9e1wiY29kZVwifVxyXG4gICAgICAgICAgICBteD1cIjFcIlxyXG4gICAgICAgICAgICBzaXplPXtcInNtXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIGNvZGVcclxuICAgICAgICAgIDwvTWFya0J1dHRvbj5cclxuICAgICAgICAgIDxCbG9ja0J1dHRvblxyXG4gICAgICAgICAgICBlPXtlZGl0b3J9XHJcbiAgICAgICAgICAgIGljb249ezxGYUhlYWRpbmcgLz59XHJcbiAgICAgICAgICAgIGZvcm1hdD17XCJoZWFkaW5nXCJ9XHJcbiAgICAgICAgICAgIG14PVwiMVwiXHJcbiAgICAgICAgICAgIHNpemU9e1wic21cIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgaDFcclxuICAgICAgICAgIDwvQmxvY2tCdXR0b24+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT1cImNvbG9yXCIgbWF4Vz17XCI2MHB4XCJ9IHNpemU9XCJzbVwiLz5cclxuICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICA8SFN0YWNrPlxyXG4gICAgICAgICAgICAgIDxIU3RhY2s+PFRleHQ+U3RhdHVzIDwvVGV4dD48QmlSZWZyZXNoIC8+PC9IU3RhY2s+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJtZFwiIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9Plx1MjcxNDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICB7LyogPE1hcmtCdXR0b24gZT17ZWRpdG9yfSBpY29uPVwiXCIgZm9ybWF0PXtcIlwifSBteD1cIjFcIiBzaXplPXtcInNtXCJ9PmgyPC9NYXJrQnV0dG9uPiAqL31cclxuICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggcHQ9XCIzXCIgYm9yZGVyPXtcIjFweFwifSBib3JkZXJDb2xvcj1cImdyZWVuXCIgYm9yZGVyU3R5bGU9e1wiZGFzaGVkXCJ9IHN0eWxlPXt7d2lkdGg6JzYwdncnLG1pbkhlaWdodDpcIjEwdmhcIn19IHA9XCIzXCIgbXQ9XCIzXCI+XHJcbiAgICAgICAgPFNsYXRlIGVkaXRvcj17ZWRpdG9yfSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZSl9PlxyXG4gICAgICAgICAgPEVkaXRhYmxlXHJcbiAgICAgICAgICAgIHJlbmRlckVsZW1lbnQ9e3JlbmRlckVsZW1lbnR9XHJcbiAgICAgICAgICAgIHJlbmRlckxlYWY9e3JlbmRlckxlYWZ9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgc29tZSByaWNoIHRleHRcdTIwMjZcIlxyXG4gICAgICAgICAgICBzcGVsbENoZWNrXHJcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICBvbktleURvd249eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgaG90a2V5IGluIEhPVEtFWVMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0hvdGtleShob3RrZXksIGV2ZW50IGFzIGFueSkpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWFyayA9IEhPVEtFWVNbaG90a2V5XTtcclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlTWFyayhlZGl0b3IsIG1hcmspO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID48L0VkaXRhYmxlPlxyXG4gICAgICAgIDwvU2xhdGU+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQmxvY2tCdXR0b24gPSAoeyBmb3JtYXQsIGljb24sIGUgfTogYW55KSA9PiB7XHJcbiAgbGV0IGVkaXRvciA9IGU7XHJcbiAgbGV0IG1hcmsgPSBmb3JtYXQ7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25cclxuICAgICAgc2l6ZT17XCJzbVwifVxyXG4gICAgICBib3JkZXJSYWRpdXM9XCIxXCJcclxuICAgICAgY29sb3JTY2hlbWU9e1wiZ3JheVwifVxyXG4gICAgICBvbk1vdXNlRG93bj17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVCbG9jayhlZGl0b3IsIGZvcm1hdCk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtpY29ufVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE1hcmtCdXR0b24gPSAoeyBmb3JtYXQsIGljb24sIGUgfTogYW55KSA9PiB7XHJcbiAgLy8gY29uc3QgZWRpdG9yOmFueSA9IHVzZVN0YVxyXG4gIGxldCBlZGl0b3IgPSBlO1xyXG4gIGxldCBtYXJrID0gZm9ybWF0O1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIHNpemU9e1wic21cIn1cclxuICAgICAgYm9yZGVyUmFkaXVzPVwiMVwiXHJcbiAgICAgIGNvbG9yU2NoZW1lPXtcImdyYXlcIn1cclxuICAgICAgb25Nb3VzZURvd249eyhldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdG9nZ2xlTWFyayhlZGl0b3IsIGZvcm1hdCk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtpY29ufVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEVsZW1lbnQgPSAoeyBhdHRyaWJ1dGVzLCBjaGlsZHJlbiwgZWxlbWVudCB9OiBhbnkpID0+IHtcclxuICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xyXG4gICAgY2FzZSBcImJsb2NrLXF1b3RlXCI6XHJcbiAgICAgIHJldHVybiA8YmxvY2txdW90ZSB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvYmxvY2txdW90ZT47XHJcbiAgICBjYXNlIFwiYnVsbGV0ZWQtbGlzdFwiOlxyXG4gICAgICByZXR1cm4gPHVsIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC91bD47XHJcbiAgICBjYXNlIFwiaGVhZGluZ1wiOlxyXG4gICAgICByZXR1cm4gPEhlYWRpbmcgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L0hlYWRpbmc+O1xyXG4gICAgY2FzZSBcImhlYWRpbmctdHdvXCI6XHJcbiAgICAgIHJldHVybiA8aDIgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L2gyPjtcclxuICAgIGNhc2UgXCJsaXN0LWl0ZW1cIjpcclxuICAgICAgcmV0dXJuIDxsaSB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvbGk+O1xyXG4gICAgY2FzZSBcIm51bWJlcmVkLWxpc3RcIjpcclxuICAgICAgcmV0dXJuIDxvbCB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvb2w+O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDxwIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9wPjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBMZWFmID0gKHsgYXR0cmlidXRlcywgY2hpbGRyZW4sIGxlYWYgfTogYW55KSA9PiB7XHJcbiAgaWYgKGxlYWYuYm9sZCkge1xyXG4gICAgY2hpbGRyZW4gPSA8VGV4dCBhcz17XCJzdHJvbmdcIn0+e2NoaWxkcmVufTwvVGV4dD47XHJcbiAgfVxyXG5cclxuICBpZiAobGVhZi5jb2RlKSB7XHJcbiAgICBjaGlsZHJlbiA9IDxUZXh0IGFzPVwiY29kZVwiPntjaGlsZHJlbn08L1RleHQ+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGxlYWYuaXRhbGljKSB7XHJcbiAgICBjaGlsZHJlbiA9IDxUZXh0IGFzPXtcImVtXCJ9PntjaGlsZHJlbn08L1RleHQ+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGxlYWYudW5kZXJsaW5lKSB7XHJcbiAgICBjaGlsZHJlbiA9IDxUZXh0IGFzPVwidVwiPntjaGlsZHJlbn08L1RleHQ+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxzcGFuIHsuLi5hdHRyaWJ1dGVzfT57Y2hpbGRyZW59PC9zcGFuPjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZU1hcmsoZWRpdG9yOiBFZGl0b3IsIG1hcms6IGFueSkge1xyXG4gIGNvbnN0IGlzQWN0aXZlID0gaXNNYXJrQWN0aXZlKGVkaXRvciwgbWFyayk7XHJcbiAgY29uc29sZS5sb2coXCJUT0dHTEUgTUFSS0VEIFdPUktFRFwiKTtcclxuXHJcbiAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICBFZGl0b3IucmVtb3ZlTWFyayhlZGl0b3IsIG1hcmspO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBFZGl0b3IuYWRkTWFyayhlZGl0b3IsIG1hcmssIHRydWUpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNNYXJrQWN0aXZlKGVkaXRvcjogRWRpdG9yLCBtYXJrOiBhbnkpIHtcclxuICBjb25zdCBtYXJrczogYW55ID0gRWRpdG9yLm1hcmtzKGVkaXRvcik7XHJcblxyXG4gIHJldHVybiBtYXJrcyA/IG1hcmtzW21hcmtdID09PSB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUJsb2NrKGVkaXRvcjogRWRpdG9yLCBmb3JtYXQ6IGFueSkge1xyXG4gIGNvbnN0IGlzQWN0aXZlID0gaXNCbG9ja0FjdGl2ZShlZGl0b3IsIGZvcm1hdCk7XHJcbiAgY29uc3QgaXNMaXN0ID0gTElTVF9UWVBFUy5pbmNsdWRlcyhmb3JtYXQpO1xyXG5cclxuICBUcmFuc2Zvcm1zLnVud3JhcE5vZGVzKGVkaXRvciwge1xyXG4gICAgbWF0Y2g6IChuKSA9PlxyXG4gICAgICAhRWRpdG9yLmlzRWRpdG9yKG4pICYmXHJcbiAgICAgIFNsYXRlRWxlbWVudC5pc0VsZW1lbnQobikgJiZcclxuICAgICAgTElTVF9UWVBFUy5pbmNsdWRlcyhuLnR5cGUpLFxyXG4gICAgc3BsaXQ6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG5ld1Byb3BlcnRpZXM6IFBhcnRpYWw8U2xhdGVFbGVtZW50PiA9IHtcclxuICAgIHR5cGU6IGlzQWN0aXZlID8gXCJwYXJhZ3JhcGhcIiA6IGlzTGlzdCA/IFwibGlzdC1pdGVtXCIgOiBmb3JtYXQsXHJcbiAgfTtcclxuICBUcmFuc2Zvcm1zLnNldE5vZGVzPFNsYXRlRWxlbWVudD4oZWRpdG9yLCBuZXdQcm9wZXJ0aWVzKTtcclxuXHJcbiAgaWYgKCFpc0FjdGl2ZSAmJiBpc0xpc3QpIHtcclxuICAgIGNvbnN0IGJsb2NrID0geyB0eXBlOiBmb3JtYXQsIGNoaWxkcmVuOiBbXSB9O1xyXG4gICAgVHJhbnNmb3Jtcy53cmFwTm9kZXMoZWRpdG9yLCBibG9jayk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Jsb2NrQWN0aXZlKGVkaXRvcjogYW55LCBmb3JtYXQ6IGFueSkge1xyXG4gIGNvbnN0IHsgc2VsZWN0aW9uIH0gPSBlZGl0b3I7XHJcblxyXG4gIGlmICghc2VsZWN0aW9uKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gIGNvbnN0IFttYXRjaF0gPSBBcnJheS5mcm9tKFxyXG4gICAgRWRpdG9yLm5vZGVzKGVkaXRvciwge1xyXG4gICAgICBhdDogRWRpdG9yLnVuaGFuZ1JhbmdlKGVkaXRvciwgc2VsZWN0aW9uKSxcclxuICAgICAgbWF0Y2g6IChuKSA9PlxyXG4gICAgICAgICFFZGl0b3IuaXNFZGl0b3IobikgJiYgU2xhdGVFbGVtZW50LmlzRWxlbWVudChuKSAmJiBuLnR5cGUgPT09IGZvcm1hdCxcclxuICAgIH0pXHJcbiAgKTtcclxuICByZXR1cm4gISFtYXRjaDtcclxufVxyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcclxuLy8gaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVzQ29udGV4dFByb3ZpZGVyID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBcclxuXHJcbiAgY29uc3QgbWFpbkRhdGEgPSBbe1xyXG4gICAgICBuYW1lRHJ1ZzpcInBhcmFjZXRhbW9sXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06XCJzeXJ1cFwiLFxyXG4gICAgICBtZzpcIjE2XCIsXHJcbiAgICAgIGR1cmF0aW9uIDpcIjEwMVwiLFxyXG4gIH0se1xyXG4gICAgICBuYW1lRHJ1ZzpcIndhcmZhcmluXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06XCJsb3Rpb25cIixcclxuICAgICAgbWc6XCIxNlwiLFxyXG4gICAgICBkdXJhdGlvbiA6XCIxMTFcIlxyXG4gIH1dXHJcblxyXG4vLyAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG1haW5EYXRhKVxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgbmFtZURydWc6IFwiXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06IFwiXCIsXHJcbiAgICAgIG1nOiBcIlwiLFxyXG4gICAgICBkdXJhdGlvbjogXCJcIixcclxuICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbZGF0YSwgc2V0RGF0YV19PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1ByZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRm9ybUxhYmVsLFxyXG4gIFRhYixcclxuICBUYWJMaXN0LFxyXG4gIFRhYlBhbmVsLFxyXG4gIFRhYlBhbmVscyxcclxuICBUYWJzLFxyXG4gIFRleHQsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBmaXJlQXV0aCwgZmlyZXN0b3JlIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgTG9naW5Db250ZXh0IH0gZnJvbSBcIn4vY29udGV4dC9sb2dpbkRhdGFDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKTtcclxuICBsZXQgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xyXG4gIGxldCBkb2NFbWFpbCA9IGZvcm0uZ2V0KFwiZG9jRW1haWxcIik7XHJcbiAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gIGNvbnNvbGUubG9nKFwiQ1JFQVRFIFBBVCAwMVwiKTtcclxuICBjb25zdCBjb2wgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInJ4cGF0XCIpO1xyXG4gIGNvbnN0IGxhYkNvbCA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwicnhMYWJzVXNlcnNcIik7XHJcbiAgbGV0IG1zZztcclxuICBzd2l0Y2ggKGZvcm1BY3Rpb24pIHtcclxuICAgIGNhc2UgXCJjcmVhdGVQYXRcIjpcclxuICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgUEFUXCIpO1xyXG5cclxuICAgICAgY29sXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHNuYXApID0+IHtcclxuICAgICAgICAgIHNuYXAuZm9yRWFjaCgobSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobS5kYXRhKCkuZW1haWwgPT09IGVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgLy8gbXNnID0geyBzdGF0dXM6IHRydWUsIGxvZ2luOnRydWUgLGRhdGE6bS5kYXRhKCl9O1xyXG5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtLmRhdGEoKSwgXCJDUkVBVEUgUEFUIDAxXCIpO1xyXG5cclxuICAgICAgICAgICAgICBsYWJDb2wuZ2V0KCkudGhlbigoc25hcExhYnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNuYXBMYWJzLmZvckVhY2goKHNsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzbC5kYXRhKCkuZW1haWwgPT09IGRvY0VtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGxpc3Qgb2YgcGF0YXRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdE9mUGF0ID0gc2wuZGF0YSgpLnBhdExpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZExpc3QgPSBsaXN0T2ZQYXQucHVzaChlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2wuZGF0YSgpLCBcIkRPQyBEQVRBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmRvYygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuc2V0KHsgb2xkTGlzdCwgLi4uc2wuZGF0YSgpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZWQgaW4gdGhlIGRhdGFiYXNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJFUlJPUiBEVVJJTkcgU0FWSU5HIElOIERBVEFCQVNFIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgbXNnID0geyBzdGF0dXM6IHRydWUsIGxvZ2luOiBmYWxzZSwgZGF0YTogZXJyIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhtc2cpO1xyXG5cclxuICByZXR1cm4gbXNnO1xyXG59O1xyXG5cclxuY29uc3QgRmluZFNhdmVkUGF0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHB0PVwiM1wiXHJcbiAgICAgIGJvcmRlcj17XCIzcHhcIn1cclxuICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzB2d1wiLCBtaW5IZWlnaHQ6IFwiNDB2aFwiIH19XHJcbiAgICAgIHA9XCIzXCJcclxuICAgICAgbXQ9XCIzXCJcclxuICAgICAgdz1cIjYwXCJcclxuICAgID5cclxuICAgICAgPEZvcm1MYWJlbD5QYXRpZW50IElkPC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dCBtYj1cIjFcIiBteT1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJwYXRpZW50IGlkXCIgLz5cclxuXHJcbiAgICAgIDxGb3JtTGFiZWw+UGF0aWVudCBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dCBteT1cIjFcIiBtYj1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz5cclxuICAgICAgPEZvcm1MYWJlbD5QYXRpZW50IFBob25lTnVtYmVyPC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dCBtYj1cIjFcIiBteT1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIiAvPlxyXG5cclxuICAgICAgPEJ1dHRvbiBteT1cIjNcIj5TZWFyY2g8L0J1dHRvbj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDcmVhdGVOZXdQYXRpZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlLCBzZXRFXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkLCBzZXREXSA9IHVzZUNvbnRleHQoTG9naW5Db250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgcHQ9XCIzXCJcclxuICAgICAgYm9yZGVyPXtcIjNweFwifVxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogXCIzMHZ3XCIsIG1pbkhlaWdodDogXCI0MHZoXCIgfX1cclxuICAgICAgcD1cIjNcIlxyXG4gICAgICBtdD1cIjNcIlxyXG4gICAgICB3PVwiNjBcIlxyXG4gICAgPlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5QYXRpZW50IEVtYWlsIElkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBtYj1cIjFcIlxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBteT1cIjFcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHZhbHVlPXtlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXRpZW50IEVtYWlsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dCB2YWx1ZT17ZC5lbWFpbH0gbmFtZT1cImRvY0VtYWlsXCIgLz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBtPVwiM1wiXHJcbiAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXHJcbiAgICAgICAgICB2YWx1ZT17XCJjcmVhdGVQYXRcIn1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY29sb3JTY2hlbWU9e1wiZ3JlZW5cIn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBjcmVhdGUgUGF0aWVudFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2V0QWxsUGF0aWVudCA9ICgpID0+IHtcclxuICByZXR1cm4gPFRleHQ+R2V0IGFsbCBQYXRpZW50PC9UZXh0PjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEZpbmRQYXRpZW50KCkge1xyXG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKEFjdGlvbkRhdGEpO1xyXG5cclxuICAgIGlmIChBY3Rpb25EYXRhKSB7XHJcbiAgICAgIC8vIHNldEQoQWN0aW9uRGF0YS5kYXRhKVxyXG4gICAgfVxyXG4gIH0sIFtBY3Rpb25EYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjYwdndcIiB9fT5cclxuICAgICAgPFRhYnM+XHJcbiAgICAgICAgPFRhYkxpc3Q+XHJcbiAgICAgICAgICA8VGFiPkxvZ2luPC9UYWI+XHJcbiAgICAgICAgICA8VGFiPkNyZWF0ZSBOZXcgUGF0aWVudDwvVGFiPlxyXG4gICAgICAgICAgPFRhYj5HZXQgYWxsIFBhdGllbnQ8L1RhYj5cclxuICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgPFRhYlBhbmVscz5cclxuICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgPEZpbmRTYXZlZFBhdCAvPlxyXG4gICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgPENyZWF0ZU5ld1BhdGllbnQgLz5cclxuICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxHZXRBbGxQYXRpZW50IC8+XHJcbiAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgIDwvVGFiUGFuZWxzPlxyXG4gICAgICA8L1RhYnM+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG57XHJcbiAgLyogPEJveCBzdHlsZT17eyB3aWR0aDogXCI2MHZ3XCIgfX0+XHJcbjxUYWJzPlxyXG4gIDxUYWJMaXN0PlxyXG4gICAgPFRhYj5Mb2dpbjwvVGFiPlxyXG4gICAgPFRhYj5DcmVhdGUgTmV3IFVzZXI8L1RhYj5cclxuICA8L1RhYkxpc3Q+XHJcbiAgPFRhYlBhbmVscz5cclxuICAgIDxUYWJQYW5lbD5cclxuICAgICAgPExvZ2luVXNlciAvPlxyXG4gICAgPC9UYWJQYW5lbD5cclxuICAgIDxUYWJQYW5lbD5cclxuICAgICAgPENyZWF0ZU5ld1VzZXIgLz5cclxuICAgIDwvVGFiUGFuZWw+XHJcbiAgPC9UYWJQYW5lbHM+XHJcbjwvVGFicz5cclxuPC9Cb3g+ICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbmRQYXRpZW50O1xyXG4iLCAiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgYXBwbGljYXRpb25EZWZhdWx0LCBjZXJ0IH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2FwcFwiO1xyXG5sZXQgYWRtaW4gPSByZXF1aXJlKFwiZmlyZWJhc2UtYWRtaW5cIilcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2F1dGhcIjtcclxuXHJcblxyXG5cclxuY29uc3QgYTphbnkgPSB7XHJcbiAgXCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXHJcbiAgXCJwcm9qZWN0X2lkXCI6IFwicnVkaHJham9zaGljb21cIixcclxuICBcInByaXZhdGVfa2V5X2lkXCI6IFwiOWZlZjM2YjI3OWE0MTk0OGU2NjQzNDM0ZGY5NzMyMDgxYTViZDI5NVwiLFxyXG4gIFwicHJpdmF0ZV9rZXlcIjogXCItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUURCYVBiU0lJM1RpdnMrXFxuRDlpRWlPZW03ZVFjM25EcnVCVUQwTE0xUVEyYm1NQzNVUVlnV3lNaUgvdW5waE5zSTI3Y1Q4TXBVdjE3bnUzUlxcbjRKYnQyczUzWmVFRHNERXJLWlVIbkx6eGIrZTh6YjdsQVlPc016S2F0cVNOUHVPSGh3QjhhU1NKQXF3RkMxdXBcXG5XbituVTc3T1Z2bEhiYmhDUW8rd0dzeks5U2lzME1jak1ZWHF3dnR5MjVSNmwzd3Jrc1I5ZGVQbWZLSkpKVjA5XFxuOWhON25hc3Z1MEhtZzNnOVNVeUh3VlZhRFcwZy8zVVZBOXN5MkJkb1NkNWk4c2UxTCt5TlFuYytZaFZyWVlMU1xcbnBUZExLdlpOaCtnTHZGK0R1cXljaXkyS3FiRU12UzZTUlQyQXJtWWVHK3FRaGwrV1ZSd0xTQnNRQUY0d1FBZ0lcXG5udTczWjhKdEFnTUJBQUVDZ2dFQUdDSnkrbEdab1JZc3Q5ZmVXdHVDbksvKzBTTm96K0ZPcmdVeTk2aEFmSFFaXFxuU0ViU0R1T1FoTWVjN1pTcHc4ckFJTG5MVHJMT2NzaW9RSkpZQXlKVXRVMS9RS2lSMmlMOE45RDFPdU9OOVY5dlxcblBNQnRuK1Zib1RhOVhlckZGYnBnOHlWanE3MHJuZzJHeUtGRVlLcndtbXI3L0UvU3VHSDU4QzNIOUdPWFNja2tcXG5IdUs2alNvWWxhQ3V6VHp6clRYcFpxQTBDTHRLcTcrMEFZek5Xc3VWajNOb1JQTUt1U3RYM2Y1TmpWamxtYWtmXFxuT3hkTzRVeTlTZGszVUsxYzhNMjNXMnJKNlB4aUdVdE9SREFhMjN3bXJ2WC92MUg2ZnBJZ0k1bkNnVW5jTDZWNVxcbjc0cjNtWWIwZUZKTU94Wlk5ZUJYYTIzL3hnaEdTWU11alJreFF1bk1BUUtCZ1FEbWdoUHh5SDd6OGhhUWV2SEpcXG4zOEZ0Y1RSWDl1T0NyZWJ5R0hXdUlqTVUvcUV6N0hjQVRRUFNSUm8vTkpHNW5yUGpFUzY3M2xnMzBMbzNNNkVVXFxuclp6aDFEV0xqOGxSRUVncE1DajJxRUswWjBMQ29QcU1vekNjd1JabUxiNVpMa1BFdWJRZCsyN2JJY0crQjl0Ylxcbnh0eVdYaGlxSkVXMFFNNmxoYk5XNXc2WWdRS0JnUURXekpuTy9ONTlGbXhaeGM1Y3hSbXh6Nm8wY2RkL3JQTXNcXG5MKzUrUjR0Qm85U0J5ZHpsdnA4NU80S1owZU9KVzJURjZOVC9nYmF5MzByLzF2V2R6UFFqNndHY0haYjY1WXF1XFxudThSWDBGUVB0MnN3WlFHQU4vdGJ2dGtTWlZ3ZGFOaW0yeHNDdEsvY0phWVpWUy9kalBFQUJJcFBES2l2ZzVaeVxcbk40eXJxQk1UN1FLQmdRQ0pmQkpMUnV1NXNxNFV0TS9jT1pKVUpZNHozVFRycjYrc3ZEd01oYWQwSVQrakNhb2NcXG55dEs1cXEreC9UZmh2Ni9KZ21rZWNzcXBWOXlKcWtpc1hiVFIyVkdxa1ROaEgxWDdBeGVicnRaQ1pjaWk3NE1oXFxuT1FCNHJvNGVtYkFMM3hWYWsrekRhVUZBZ0V6ZmZDNHcrbFo5ZFZnK3V1MjhTbDgyeUowait5SndnUUtCZ0Z2Ylxcbkh5TlBLKzRlT3JPaFRZQ0tvVlJTMUJ5ZFdtUzFGMENjTnNjMTNTMXkzQnVzc1pSbUVqMHRYOHBiNFl3SjAyeDNcXG5CeTlFejFacSt1MnhoVk80SStlQVJpMzIwV3YxNFhxYnZYazRFOXFzdTEvMHNkR2RIeGE2NUtWalJ5TWtoUkhGXFxudlNWSkU3TjNQakt6SlViL1VNaUxLSUpwalhHUk9qTVo0a1ErR2ZwNUFvR0FSOHh0KytNb3pWT2I5dnRGMXVUTFxcbjIzRmxxSEJ1U3FuUk1xc2dpV3RSSUErOU0rMDN4UkRQSjh6TzBtSW1tUCt0cHlTNmpER2dHWkUyTWNxeC9wRS9cXG5JQ2FNVlBHanNYWWRicDI3MGMwazJmSDJaL3RWWEFnckhoekdnTUJnemljY1dINjdSbjhtZ2p4M1QyYXFsWGR0XFxuZ05NQU9SaUNJTytMUytjZXhZUllGTGs9XFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxcblwiLFxyXG4gIFwiY2xpZW50X2VtYWlsXCI6IFwiZmlyZWJhc2UtYWRtaW5zZGsteHVkMThAcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIixcclxuICBcImNsaWVudF9pZFwiOiBcIjExMTA5NzMyMzc0NTc0MDUxNTk4OVwiLFxyXG4gIFwiYXV0aF91cmlcIjogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aFwiLFxyXG4gIFwidG9rZW5fdXJpXCI6IFwiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5cIixcclxuICBcImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0c1wiLFxyXG4gIFwiY2xpZW50X3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2ZpcmViYXNlLWFkbWluc2RrLXh1ZDE4JTQwcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIlxyXG59XHJcbmluaXRpYWxpemVBcHAoe2NyZWRlbnRpYWw6Y2VydChhKX0pO1xyXG5leHBvcnQgY29uc3QgZmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBjb25zdCBmaXJlQXV0aCA9IGdldEF1dGgoKTtcclxuXHJcblxyXG4iLCAiaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjb2xsZWN0aW9uVXNlciA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcblxyXG4gIGxldCByZXMgPSBhd2FpdCBjb2xsZWN0aW9uVXNlclxyXG4gICAgLmRvYygpXHJcbiAgICAuc2V0KHsgZmlyc3Q6IFwiSmhzb25cIiwgbGFzdDogXCJEb2VcIiwgZW1haWw6IFwicnVkcmFAZ21pYWwuY29tXCIgfSk7XHJcblxyXG4gIHJldHVybiB7IG1zZzogXCJzYXZlZCBkYXRhXCIsIHJlcyB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgcG9zdCA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggaGVpZ2h0PXtcIjEwMHZoXCJ9IGRpc3BsYXk9e1wiZmxleFwifSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PlxyXG4gICAgICA8VlN0YWNrPlxyXG4gICAgICA8SGVhZGluZyBzdHlsZT17e2ZvbnRTaXplOlwiNWVtXCJ9fT5IZWFsdGg8L0hlYWRpbmc+XHJcbiAgICAgIDxIZWFkaW5nIHN0eWxlPXt7Zm9udFNpemU6XCI1ZW1cIn19PmVxdWl0eTwvSGVhZGluZz5cclxuICAgICAgPEhlYWRpbmcgc3R5bGU9e3tmb250U2l6ZTpcIjVlbVwifX0+YWx3YXlzPC9IZWFkaW5nPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShwb3N0KX0gKi99XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwgImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgRm9ybUxhYmVsLFxyXG4gIEhlYWRpbmcsXHJcbiAgSFN0YWNrLFxyXG4gIElucHV0LFxyXG4gIFNwYWNlcixcclxuICBUYWIsXHJcbiAgVGFiTGlzdCxcclxuICBUYWJQYW5lbCxcclxuICBUYWJQYW5lbHMsXHJcbiAgVGFicyxcclxuICB1c2VUb2FzdCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hdXRoXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uRnVuY3Rpb24sXHJcbiAgRm9ybSxcclxuICByZWRpcmVjdCxcclxuICB1c2VBY3Rpb25EYXRhLFxyXG4gIHVzZVN1Ym1pdCxcclxuICB1c2VUcmFuc2l0aW9uLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tIFwifi9jb250ZXh0L2xvZ2luRGF0YUNvbnRleHRcIjtcclxuaW1wb3J0IHsgY3JlYXRlQW5kU2F2ZVNlc3Npb24gfSBmcm9tIFwifi9sb2dpYy9zZXNzaW9uQXV0cmhMb2dpY1wiO1xyXG5pbXBvcnQgeyBjb21taXRTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9ybVRva2VuLCBjcmVhdGVVc2VyIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZmlyZUF1dGgsIGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCI7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XHJcbi8vICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuLy8gICBsZXQgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKTtcclxuLy8gICBsZXQgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xyXG4vLyAgIGxldCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XHJcbi8vICAgbGV0IHByb2ZpbGVOYW1lID0gZm9ybS5nZXQoXCJwcm9maWxlTmFtZVwiKTtcclxuXHJcbi8vICAgY29uc3QgY29sID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuLy8gICBsZXQgcmVzIDogYW55O1xyXG4vLyAgIGlmIChmb3JtQWN0aW9uID09PSBcImNyZWF0ZXVzZXJcIikge1xyXG4vLyAgICAgaWYgKGVtYWlsICYmIHBhc3N3b3JkICYmIHByb2ZpbGVOYW1lKSB7XHJcbi8vICAgICAgIGF3YWl0IGNyZWF0ZVVzZXIoe1xyXG4vLyAgICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkLFxyXG4vLyAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm9maWxlTmFtZSxcclxuLy8gICAgICAgfSkudGhlbihhc3luYyAodXNlclJlY29yZCkgPT4ge1xyXG4vLyAgICAgICAgIHJlcyA9IHsgc3RhdHVzOiB0cnVlLCBpZDogdXNlclJlY29yZC51aWQgfTtcclxuLy8gICAgICAgICBhd2FpdCBjcmVhdGVBbmRTYXZlU2Vzc2lvbih1c2VyUmVjb3JkLnVpZCxyZXF1ZXN0KVxyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiByZXMuc3RhdHVzID8gcmVkaXJlY3QoXCIvZGFzaGJvYXJkXCIpIDogcmVzXHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKTtcclxuICBsZXQgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xyXG4gIGxldCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XHJcbiAgbGV0IGRpc3BsYXlOYW1lID0gZm9ybS5nZXQoXCJwcm9maWxlTmFtZVwiKTtcclxuICBsZXQgY2VudGVyTmFtZSA9IGZvcm0uZ2V0KFwiY2VudGVyTmFtZVwiKTtcclxuXHJcbiAgY29uc3QgY29sID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJyeExhYnNVc2Vyc1wiKTtcclxuXHJcbiAgbGV0IG1zZzogYW55ID0gXCJcIjtcclxuICBjb25zdCBjb2xsZWN0aW9uVXNlciA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwicnhMYWJzVXNlcnNcIik7XHJcbmxldCByZXM7XHJcblxyXG4gIHN3aXRjaCAoZm9ybUFjdGlvbikge1xyXG4gICAgY2FzZSBcImNyZWF0ZVVzZXJcIjpcclxuXHJcbiAgICAgICByZXMgPSBhd2FpdCBjb2xsZWN0aW9uVXNlclxyXG4gICAgICAgIC5kb2MoKVxyXG4gICAgICAgIC5zZXQoeyBlbWFpbCwgZGlzcGxheU5hbWUsIHBhc3N3b3JkIH0pO1xyXG4gICAgICBtc2cgPSB7IHN0YXR1czogdHJ1ZSwgcmVzIH07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJsb2dpblVzZXJcIjpcclxuICAgICAgXHJcbiAgICByZXMgPSBhd2FpdCBjb2xsZWN0aW9uVXNlci5nZXQoKS50aGVuKHNuYXAgPT4ge1xyXG4gICAgICBzbmFwLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgaWYoZW1haWwgPT09IGQuZGF0YSgpLmVtYWlsICYmIHBhc3N3b3JkID09PSBkLmRhdGEoKS5wYXNzd29yZCl7XHJcbiAgICAgICAgICBtc2cgPSB7IHN0YXR1czogdHJ1ZSwgbG9naW46dHJ1ZSAsZGF0YTpkLmRhdGEoKX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcblxyXG4gICAgICAvLyBsZXQgcmVzID0gYXdhaXQgY29sbGVjdGlvblVzZXIuZ2V0XHJcblxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBtc2cuc3RhdHVzID8gcmVkaXJlY3QoYC9kYXNoYm9hcmQ/ZW1haWw9JHt9YCkgOiBtc2c7XHJcbiAgcmV0dXJuIG1zZy5zdGF0dXMgPyAgbXNnIDogbnVsbDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5jb25zdCBbZCxzZXREXSA9IHVzZUNvbnRleHQoTG9naW5Db250ZXh0KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhBY3Rpb25EYXRhKTtcclxuICAgIFxyXG4gICAgaWYoQWN0aW9uRGF0YSl7XHJcbiAgICAgIHNldEQoQWN0aW9uRGF0YS5kYXRhKVxyXG4gICAgfVxyXG4gIH0sW0FjdGlvbkRhdGFdKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4SD1cImNvbnRhaW5lci5sZ1wiPlxyXG4gICAgICBcclxuICAgIFxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIG10PVwiMzBcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjYwdndcIiB9fT5cclxuICAgICAgICAgIDxUYWJzPlxyXG4gICAgICAgICAgICA8VGFiTGlzdD5cclxuICAgICAgICAgICAgICA8VGFiPkxvZ2luPC9UYWI+XHJcbiAgICAgICAgICAgICAgPFRhYj5DcmVhdGUgTmV3IFVzZXI8L1RhYj5cclxuICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICA8VGFiUGFuZWxzPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxMb2dpblVzZXIgLz5cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVOZXdVc2VyIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9UYWJQYW5lbHM+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTG9naW5Vc2VyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5DZW50ZXI8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgdHlwZT1cImNlbnRlclwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGFsIExhYnNcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG5cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgey8qIEFsbCBPbGQgaW5wdXRzIERvd24qL31cclxuICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImpob25AZ21haWwuY29tXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUhlbHBlclRleHQ+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbC48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8SFN0YWNrIG10PVwiNlwiIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG5hbWU9XCJfYWN0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e1wibG9naW5Vc2VyXCJ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XCJncmVlblwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDcmVhdGVOZXdVc2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5Qcm9maWxlIE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwicHJvZmlsZU5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJKaG9uIERvZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPkNlbnRyZSBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbmFtZT1cImNlbnRlck5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW50ZXIgTmFtZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgey8qIDxGb3JtTGFiZWw+TGljZW5jZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8vIG5hbWU9XCJsaWNlbmNlXCJcclxuICAgICAgICAgIC8vIHBsYWNlaG9sZGVyPVwiSmhvbiBEb2VcIlxyXG4gICAgICAgID48L0lucHV0PiAqL31cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPEhTdGFjayBtdD1cIjZcIiBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtcImNyZWF0ZVVzZXJcIn1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENyZWF0ZSBQcm9maWxlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIHByZXNjcmlwdGlvblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic4Y2JjNjlhZCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtSUJVUkZQWFUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVBZWUdDUFNRLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC0yUU1ESTdUUi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1lXQk43SzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KV0daWVY2US5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvTG9naW4nOnsnaWQnOidyb3V0ZXMvTG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonTG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvTG9naW4tM1hSSDJGUFEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUkzQ01MNlM0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGFzaGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC1OVTZQV1FCRS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkL2luZGV4Jzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgtN1hNQlFTSlUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNZV0JON0s2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSTNDTUw2UzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KV0daWVY2US5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtNDVHWjZMSkIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUkzQ01MNlM0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC04Q0JDNjlBRC5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxR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
