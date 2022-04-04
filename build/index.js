var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_react14 = require("@chakra-ui/react");
var import_react15 = require("@chakra-ui/react");
var import_react16 = require("@chakra-ui/react");
var import_ai = require("react-icons/ai");
var import_react17 = require("@chakra-ui/react");
var import_react18 = require("react");

// app/context/presContext.tsx
init_react();
var import_react10 = require("react");
var PresContext = (0, import_react10.createContext)(null);
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
  const [data, setData] = (0, import_react10.useState)([
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
var import_react19 = require("@chakra-ui/react");

// app/components/FindPatient.tsx
init_react();
var import_react11 = require("@chakra-ui/react");
var import_react12 = __toESM(require("react"));
var import_react13 = require("@chakra-ui/react");
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
  return /* @__PURE__ */ import_react12.default.createElement(import_react11.Box, {
    pt: "3",
    border: "3px",
    style: { width: "30vw", minHeight: "40vh" },
    p: "3",
    mt: "3",
    w: "60"
  }, /* @__PURE__ */ import_react12.default.createElement(import_react11.FormLabel, null, "Patient Id"), /* @__PURE__ */ import_react12.default.createElement(import_react13.Input, {
    mb: "1",
    my: "1",
    type: "number",
    placeholder: "patient id"
  }), /* @__PURE__ */ import_react12.default.createElement(import_react11.FormLabel, null, "Patient Name"), /* @__PURE__ */ import_react12.default.createElement(import_react13.Input, {
    my: "1",
    mb: "1",
    type: "number",
    placeholder: "Name"
  }), /* @__PURE__ */ import_react12.default.createElement(import_react11.FormLabel, null, "Patient PhoneNumber"), /* @__PURE__ */ import_react12.default.createElement(import_react13.Input, {
    mb: "1",
    my: "1",
    type: "number",
    placeholder: "Phone Number"
  }), /* @__PURE__ */ import_react12.default.createElement(import_react11.Button, {
    my: "3"
  }, "Search"));
};
var CreateNewPatient = () => {
  const [e, setE] = (0, import_react12.useState)("");
  const [d, setD] = (0, import_react12.useContext)(LoginContext);
  return /* @__PURE__ */ import_react12.default.createElement(import_react11.Box, {
    pt: "3",
    border: "3px",
    style: { width: "30vw", minHeight: "40vh" },
    p: "3",
    mt: "3",
    w: "60"
  }, /* @__PURE__ */ import_react12.default.createElement(import_react11.FormLabel, null, "Patient Email Id"), /* @__PURE__ */ import_react12.default.createElement(import_react13.Input, {
    mb: "1",
    name: "email",
    type: "email",
    my: "1",
    onChange: (e2) => setE(e2.target.value),
    value: e,
    placeholder: "patient Email"
  }), /* @__PURE__ */ import_react12.default.createElement(import_react13.Input, {
    value: d.email,
    name: "docEmail"
  }), /* @__PURE__ */ import_react12.default.createElement(import_react11.Button, {
    m: "3",
    name: "_action",
    value: "createPat",
    type: "submit",
    colorScheme: "green"
  }, "create Patient"));
};
var GetAllPatient = () => {
  return /* @__PURE__ */ import_react12.default.createElement(import_react11.Text, null, "Get all Patient");
};
function FindPatient() {
  const ActionData = (0, import_remix6.useActionData)();
  (0, import_react12.useEffect)(() => {
    console.log(ActionData);
    if (ActionData) {
    }
  }, [ActionData]);
  return /* @__PURE__ */ import_react12.default.createElement(import_react11.Box, {
    style: { width: "60vw" }
  }, /* @__PURE__ */ import_react12.default.createElement(import_react11.Tabs, null, /* @__PURE__ */ import_react12.default.createElement(import_react11.TabList, null, /* @__PURE__ */ import_react12.default.createElement(import_react11.Tab, null, "Login"), /* @__PURE__ */ import_react12.default.createElement(import_react11.Tab, null, "Create New Patient"), /* @__PURE__ */ import_react12.default.createElement(import_react11.Tab, null, "Get all Patient")), /* @__PURE__ */ import_react12.default.createElement(import_react11.TabPanels, null, /* @__PURE__ */ import_react12.default.createElement(import_react11.TabPanel, null, /* @__PURE__ */ import_react12.default.createElement(FindSavedPat, null)), /* @__PURE__ */ import_react12.default.createElement(import_react11.TabPanel, null, /* @__PURE__ */ import_react12.default.createElement(CreateNewPatient, null)), /* @__PURE__ */ import_react12.default.createElement(import_react11.TabPanel, null, /* @__PURE__ */ import_react12.default.createElement(GetAllPatient, null)))));
}
{
}
var FindPatient_default = FindPatient;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\dashboard\index.tsx
var import_bi = require("react-icons/bi");
function Index() {
  const [showPage, setShowPage] = (0, import_react18.useState)(1);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PresContextProvider, null, /* @__PURE__ */ React.createElement(import_react14.Button, {
    my: "3",
    mb: "3"
  }, "Create New", " "), /* @__PURE__ */ React.createElement(import_react14.Divider, null), /* @__PURE__ */ React.createElement(import_react14.Box, null, /* @__PURE__ */ React.createElement(import_react19.Breadcrumb, {
    py: "3"
  }, /* @__PURE__ */ React.createElement(import_react19.BreadcrumbItem, null, /* @__PURE__ */ React.createElement(import_react19.BreadcrumbLink, {
    color: "green",
    onClick: (e) => setShowPage(0)
  }, /* @__PURE__ */ React.createElement(import_react14.HStack, null, "  ", /* @__PURE__ */ React.createElement(import_bi.BiArrowBack, null), "  ", /* @__PURE__ */ React.createElement(import_react14.Text, null, " Find Patient")))), showPage === 1 ? /* @__PURE__ */ React.createElement(import_react19.BreadcrumbItem, null, /* @__PURE__ */ React.createElement(import_react19.BreadcrumbLink, {
    href: "#"
  }, "name of Patient")) : null)), showPage === 1 ? /* @__PURE__ */ React.createElement(import_react14.VStack, {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react14.HStack, {
    w: "full",
    justifyContent: "space-between",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(Viewer, null), /* @__PURE__ */ React.createElement(OldPrescriptions, null)), /* @__PURE__ */ React.createElement(import_react14.HStack, {
    justifyContent: "space-between",
    alignItems: "flex-end"
  }, /* @__PURE__ */ React.createElement(import_react14.Button, {
    onClick: (e) => {
      window.print();
      console.log("print");
    }
  }, "\u{1F5A8}\uFE0F"), /* @__PURE__ */ React.createElement(import_react14.Button, {
    colorScheme: "green"
  }, "Save Prescription "))) : /* @__PURE__ */ React.createElement(FindPatient_default, null)));
}
var OldPrescriptions = () => {
  return /* @__PURE__ */ React.createElement(import_react14.VStack, {
    pl: "9",
    pt: "3",
    mr: "15",
    alignItems: "flex-start"
  }, /* @__PURE__ */ React.createElement(import_react14.Heading, {
    fontSize: "2xl"
  }, "Old Prescriptions"), /* @__PURE__ */ React.createElement(import_react14.UnorderedList, null, /* @__PURE__ */ React.createElement(import_react14.ListItem, {
    listStyleType: "none"
  }, "date 17-15-87")));
};
var Viewer = () => {
  const [d, setD] = (0, import_react18.useContext)(PresContext);
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
  return /* @__PURE__ */ React.createElement(import_react14.Box, null, /* @__PURE__ */ React.createElement(import_react14.Box, null, /* @__PURE__ */ React.createElement(PresBox, null), /* @__PURE__ */ React.createElement(import_react14.Button, {
    onClick: (e) => {
      addRow(e);
    }
  }, "Add +")));
};
var PresBox = () => {
  const [d, setD] = (0, import_react18.useContext)(PresContext);
  return /* @__PURE__ */ React.createElement(import_react14.Box, null, /* @__PURE__ */ React.createElement(import_react14.HStack, null), d.map((r) => {
    return /* @__PURE__ */ React.createElement(PresStack, {
      data: r
    });
  }));
};
var PresStack = ({ data }) => {
  const [preCon, setPreCon] = (0, import_react18.useContext)(PresContext);
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
  return /* @__PURE__ */ React.createElement(import_react14.Box, {
    py: "3",
    w: "full",
    display: "flex",
    justifyContent: "space-around"
  }, /* @__PURE__ */ React.createElement(import_react14.VStack, null, /* @__PURE__ */ React.createElement(import_react14.Text, null, "Drug"), /* @__PURE__ */ React.createElement(import_react14.Input, {
    mx: "1",
    type: "text",
    placeholder: "name of Drug",
    value: data.nameDrug,
    onChange: (e) => updateData(e, data.id, "nameDrug")
  })), /* @__PURE__ */ React.createElement(import_react14.Spacer, null), /* @__PURE__ */ React.createElement(import_react14.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react14.Text, null, " Dosage Form"), /* @__PURE__ */ React.createElement(import_react15.Menu, null, /* @__PURE__ */ React.createElement(import_react15.MenuButton, {
    value: data.dosageForm,
    as: import_react14.Button,
    rightIcon: /* @__PURE__ */ React.createElement(import_ai.AiOutlineDown, null)
  }, data.dosageForm), /* @__PURE__ */ React.createElement(import_react15.MenuList, null, /* @__PURE__ */ React.createElement(import_react15.MenuItem, {
    onClick: (e) => updateData("ointments", data.id, "dosageForm")
  }, "Ointments"), /* @__PURE__ */ React.createElement(import_react15.MenuItem, {
    onClick: (e) => updateData("syrup", data.id, "dosageForm")
  }, "syrup"), /* @__PURE__ */ React.createElement(import_react15.MenuItem, {
    onClick: (e) => updateData("tablets", data.id, "dosageForm")
  }, "Tablet"), /* @__PURE__ */ React.createElement(import_react15.MenuItem, {
    onClick: (e) => updateData("powder", data.id, "dosageForm")
  }, "Powder"), /* @__PURE__ */ React.createElement(import_react15.MenuItem, {
    onClick: (e) => updateData("pills", data.id, "dosageForm")
  }, "Pills")))), /* @__PURE__ */ React.createElement(import_react14.Spacer, null), /* @__PURE__ */ React.createElement(import_react14.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react14.Text, null, "Dose mg"), /* @__PURE__ */ React.createElement(import_react16.NumberInput, {
    mx: "3",
    defaultValue: 15,
    value: data.mg,
    precision: 2,
    step: 0.2
  }, /* @__PURE__ */ React.createElement(import_react16.NumberInputField, null), /* @__PURE__ */ React.createElement(import_react16.NumberInputStepper, null, /* @__PURE__ */ React.createElement(import_react16.NumberIncrementStepper, null), /* @__PURE__ */ React.createElement(import_react16.NumberDecrementStepper, null)))), /* @__PURE__ */ React.createElement(import_react14.VStack, {
    mx: "2"
  }, /* @__PURE__ */ React.createElement(import_react14.Text, null, "Duration"), /* @__PURE__ */ React.createElement(import_react14.HStack, null, /* @__PURE__ */ React.createElement(import_react17.PinInput, {
    defaultValue: data.duration
  }, /* @__PURE__ */ React.createElement(import_react17.PinInputField, null), /* @__PURE__ */ React.createElement(import_react17.PinInputField, null), /* @__PURE__ */ React.createElement(import_react17.PinInputField, null)))));
};
var dashboard_default2 = Index;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader2
});
init_react();
var import_react20 = require("@chakra-ui/react");
var import_react21 = __toESM(require("react"));
var import_remix7 = __toESM(require_remix());
var loader2 = async () => {
  const collectionUser = firestore.collection("users");
  let res = await collectionUser.doc().set({ first: "Jhson", last: "Doe", email: "rudra@gmial.com" });
  return { msg: "saved data", res };
};
function Index2() {
  const post = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null, /* @__PURE__ */ import_react21.default.createElement(import_react20.Heading, null, "Home Page"), JSON.stringify(post));
}
var routes_default = Index2;

// route:C:\Users\rudra\Desktop\o\letter.js\app\routes\Login.tsx
var Login_exports = {};
__export(Login_exports, {
  action: () => action,
  default: () => Login_default
});
init_react();
var import_react22 = require("@chakra-ui/react");
var import_react23 = __toESM(require("react"));
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
  const toast = (0, import_react22.useToast)();
  const [d, setD] = (0, import_react23.useContext)(LoginContext);
  (0, import_react23.useEffect)(() => {
    console.log(ActionData);
    if (ActionData) {
      setD(ActionData.data);
    }
  }, [ActionData]);
  return /* @__PURE__ */ import_react23.default.createElement(import_react22.Container, {
    maxH: "container.lg"
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.Box, {
    display: "flex",
    justifyContent: "center",
    mt: "30",
    alignItems: "center"
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.Box, {
    style: { width: "60vw" }
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.Tabs, null, /* @__PURE__ */ import_react23.default.createElement(import_react22.TabList, null, /* @__PURE__ */ import_react23.default.createElement(import_react22.Tab, null, "Login"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Tab, null, "Create New User")), /* @__PURE__ */ import_react23.default.createElement(import_react22.TabPanels, null, /* @__PURE__ */ import_react23.default.createElement(import_react22.TabPanel, null, /* @__PURE__ */ import_react23.default.createElement(LoginUser, null)), /* @__PURE__ */ import_react23.default.createElement(import_react22.TabPanel, null, /* @__PURE__ */ import_react23.default.createElement(CreateNewUser, null)))))));
}
var LoginUser = () => {
  return /* @__PURE__ */ import_react23.default.createElement(import_react22.Box, null, /* @__PURE__ */ import_react23.default.createElement(import_remix8.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.FormLabel, null, "Center"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Input, {
    name: "center",
    type: "center",
    required: true,
    placeholder: "Digital Labs"
  }), /* @__PURE__ */ import_react23.default.createElement(import_react22.Spacer, null), /* @__PURE__ */ import_react23.default.createElement(import_react22.FormLabel, null, "Email"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Input, {
    name: "email",
    type: "email",
    required: true,
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react23.default.createElement(import_react22.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react23.default.createElement(import_react22.FormLabel, null, "Password"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Input, {
    name: "password",
    required: true,
    placeholder: "password",
    type: "password"
  }), /* @__PURE__ */ import_react23.default.createElement(import_react22.Spacer, null), /* @__PURE__ */ import_react23.default.createElement(import_react22.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.Button, {
    name: "_action",
    value: "loginUser",
    type: "submit",
    colorScheme: "green"
  }, "Login"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Spacer, null))));
};
var CreateNewUser = () => {
  const ActionData = (0, import_remix8.useActionData)();
  return /* @__PURE__ */ import_react23.default.createElement(import_react22.Box, null, /* @__PURE__ */ import_react23.default.createElement(import_remix8.Form, {
    method: "post"
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.FormLabel, null, "Profile Name"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Input, {
    type: "text",
    required: true,
    name: "profileName",
    placeholder: "Jhon Doe"
  }), /* @__PURE__ */ import_react23.default.createElement(import_react22.FormLabel, null, "Email"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Input, {
    type: "email",
    required: true,
    name: "email",
    placeholder: "jhon@gmail.com"
  }), /* @__PURE__ */ import_react23.default.createElement(import_react22.FormHelperText, null, "We'll never share your email."), /* @__PURE__ */ import_react23.default.createElement(import_react22.FormLabel, null, "Password"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Input, {
    required: true,
    placeholder: "password",
    name: "password",
    type: "password"
  }), /* @__PURE__ */ import_react23.default.createElement(import_react22.FormLabel, null, "Centre Name"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Input, {
    type: "text",
    required: true,
    name: "centerName",
    placeholder: "Center Name"
  }), /* @__PURE__ */ import_react23.default.createElement(import_react22.Spacer, null), /* @__PURE__ */ import_react23.default.createElement(import_react22.HStack, {
    mt: "6",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.Button, {
    name: "_action",
    value: "createUser",
    type: "submit",
    colorScheme: "green"
  }, "Create Profile"), /* @__PURE__ */ import_react23.default.createElement(import_react22.Spacer, null))));
};
var Login_default = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "b41b2345", "entry": { "module": "/build/entry.client-IBURFPXU.js", "imports": ["/build/_shared/chunk-PYYGCPSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-2QMDI7TR.js", "imports": ["/build/_shared/chunk-3YWBN7K6.js", "/build/_shared/chunk-JWGZYV6Q.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Login": { "id": "routes/Login", "parentId": "root", "path": "Login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Login-3XRH2FPQ.js", "imports": ["/build/_shared/chunk-I3CML6S4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-NU6PWQBE.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-EUSUSGJA.js", "imports": ["/build/_shared/chunk-3YWBN7K6.js", "/build/_shared/chunk-I3CML6S4.js", "/build/_shared/chunk-JWGZYV6Q.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UBAR7274.js", "imports": ["/build/_shared/chunk-I3CML6S4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-B41B2345.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCAiLi4vYXBwL2NvbnRleHQvbG9naW5EYXRhQ29udGV4dC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkLnRzeCIsICIuLi9hcHAvc2Vzc2lvbnMudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkXFxpbmRleC50c3giLCAiLi4vYXBwL2NvbnRleHQvcHJlc0NvbnRleHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpbmRQYXRpZW50LnRzeCIsICIuLi9hcHAvdXRpbHMvZmlyZS5zZXJ2ZXIudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccnVkcmFcXERlc2t0b3BcXG9cXGxldHRlci5qc1xcYXBwXFxyb3V0ZXNcXExvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XHJcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcblxyXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcclxuXHJcbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxyXG5hcHAudXNlKFxyXG4gIFwiL2J1aWxkXCIsXHJcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXHJcbik7XHJcblxyXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXHJcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcclxuXHJcbmFwcC51c2UobW9yZ2FuKFwidGlueVwiKSk7XHJcblxyXG5hcHAuYWxsKFxyXG4gIFwiKlwiLFxyXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcclxuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcclxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXGRhc2hib2FyZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXGRhc2hib2FyZFxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxydWRyYVxcXFxEZXNrdG9wXFxcXG9cXFxcbGV0dGVyLmpzXFxcXGFwcFxcXFxyb3V0ZXNcXFxcTG9naW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkYXNoYm9hcmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvTG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL0xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIkxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdDogUmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcclxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXHJcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcclxuKSB7XHJcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICk7XHJcblxyXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xyXG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcclxuICB9KTtcclxufVxyXG4iLCAiaW1wb3J0IHtcclxuICBMaW5rcyxcclxuICBMaXZlUmVsb2FkLFxyXG4gIE1ldGEsXHJcbiAgT3V0bGV0LFxyXG4gIFNjcmlwdHMsXHJcbiAgICBcclxuICBTY3JvbGxSZXN0b3JhdGlvbixcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENvbG9yTW9kZVNjcmlwdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuLy8gMS4gaW1wb3J0IGBleHRlbmRUaGVtZWAgZnVuY3Rpb25cclxuaW1wb3J0IHsgZXh0ZW5kVGhlbWUsIHR5cGUgVGhlbWVDb25maWcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQsIExvZ2luQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9sb2dpbkRhdGFDb250ZXh0XCI7XHJcblxyXG4vLyAyLiBBZGQgeW91ciBjb2xvciBtb2RlIGNvbmZpZ1xyXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xyXG4gIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcclxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IGZhbHNlLFxyXG59XHJcblxyXG4vLyAzLiBleHRlbmQgdGhlIHRoZW1lXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcgfSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xyXG59O1xyXG5cclxuY29uc3QgRG9jdW1lbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxib2R5PlxyXG4gICAgICAgPENvbG9yTW9kZVNjcmlwdCBpbml0aWFsQ29sb3JNb2RlPXtcImRhcmtcIn0gLz5cclxuICAgICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICA8TG9naW5Db250ZXh0UHJvdmlkZXI+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxyXG4gICAgICBcclxuICAgICAgICA8L0xvZ2luQ29udGV4dFByb3ZpZGVyPiAgICAgIFxyXG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgPC9ib2R5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxEb2N1bWVudCAvPlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IEJveCwgSFN0YWNrLCBMaXN0SXRlbSwgVW5vcmRlcmVkTGlzdCwgV3JhcEl0ZW0gLFRleHQsIEJ1dHRvbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tICd+L2NvbnRleHQvbG9naW5EYXRhQ29udGV4dCdcclxuaW1wb3J0IHsgQXZhdGFyLCBBdmF0YXJCYWRnZSwgQXZhdGFyR3JvdXAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIFBvcG92ZXIsXHJcbiAgUG9wb3ZlclRyaWdnZXIsXHJcbiAgUG9wb3ZlckNvbnRlbnQsXHJcbiAgUG9wb3ZlckhlYWRlcixcclxuICBQb3BvdmVyQm9keSxcclxuICBQb3BvdmVyRm9vdGVyLFxyXG4gIFBvcG92ZXJBcnJvdyxcclxuICBQb3BvdmVyQ2xvc2VCdXR0b24sXHJcbiAgUG9wb3ZlckFuY2hvcixcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgZSBmcm9tICdleHByZXNzJ1xyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcblxyXG4gIGNvbnN0IFtkLHNldERdID0gdXNlQ29udGV4dChMb2dpbkNvbnRleHQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8SFN0YWNrIHB5PVwiMVwiIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0gYmFja2dyb3VuZD17XCJncmVlbi41MDBcIn0+XHJcbiAgICAgICAgPFVub3JkZXJlZExpc3QgZGlzcGxheT17XCJmbGV4XCJ9PlxyXG4gICAgICAgICAgPExpc3RJdGVtIHA9XCIzXCIgY29sb3I9e1wid2hpdGVcIn0gIGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvXCI+TGFicyBcdUQ4M0RcdUREMkM8L0xpbms+PC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBwPVwiM1wiIGNvbG9yPXtcIndoaXRlXCJ9IGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvZGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9MaW5rPjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gcD1cIjNcIiBjb2xvcj17XCJ3aGl0ZVwifSBsaXN0U3R5bGVUeXBlPXtcIm5vbmVcIn0gPjxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+PC9MaXN0SXRlbT5cclxuICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgPFVub3JkZXJlZExpc3QgZGlzcGxheT17XCJmbGV4XCJ9PlxyXG4gICAgICAgIDxQb3BvdmVyPlxyXG4gIDxQb3BvdmVyVHJpZ2dlcj5cclxuICA8V3JhcEl0ZW0+XHJcbiAgICA8SFN0YWNrIG1yPVwiM1wiIGp1c3RpZnlDb250ZW50PXtcImZsZXgtc3RhcnRcIn0gYWxpZ25JdGVtcz1cImJhc2VsaW5lXCI+XHJcbiAgICAgICAgIHtcclxuICAgICAgZC5lbWFpbCAhPSBcIlwiID8gPEF2YXRhciAgbmFtZT17ZC5kaXNwbGF5TmFtZX0gIC8+IDogbnVsbCBcclxuICAgIH1cclxuICAgIDxUZXh0PntkLmVtYWlsfTwvVGV4dD5cclxuICAgIDwvSFN0YWNrPlxyXG4gIDwvV3JhcEl0ZW0+XHJcbiAgICBcclxuICA8L1BvcG92ZXJUcmlnZ2VyPlxyXG4gIDxQb3BvdmVyQ29udGVudD5cclxuICAgIDxQb3BvdmVyQXJyb3cgLz5cclxuICAgIDxQb3BvdmVyQ2xvc2VCdXR0b24gLz5cclxuICAgIDxQb3BvdmVySGVhZGVyPkNvbmZpcm1hdGlvbiE8L1BvcG92ZXJIZWFkZXI+XHJcbiAgICA8UG9wb3ZlckJvZHk+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGhhdmUgdGhhdCBwYXJhY2V0YW1vbCA/PC9Qb3BvdmVyQm9keT5cclxuICA8L1BvcG92ZXJDb250ZW50PlxyXG48L1BvcG92ZXI+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cclxuICAgIDwvSFN0YWNrPiAgXHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcclxuLy8gaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbkNvbnRleHRQcm92aWRlciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgXHJcblxyXG4gIGNvbnN0IG1haW5EYXRhID0gW3tcclxuICAgICAgbmFtZURydWc6XCJwYXJhY2V0YW1vbFwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOlwic3lydXBcIixcclxuICAgICAgbWc6XCIxNlwiLFxyXG4gICAgICBkdXJhdGlvbiA6XCIxMDFcIixcclxuICB9LHtcclxuICAgICAgbmFtZURydWc6XCJ3YXJmYXJpblwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOlwibG90aW9uXCIsXHJcbiAgICAgIG1nOlwiMTZcIixcclxuICAgICAgZHVyYXRpb24gOlwiMTExXCJcclxuICB9XVxyXG5cclxuLy8gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShtYWluRGF0YSlcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOlwiXCIsXHJcbiAgICAgIGRpc3BsYXlOYW1lOlwiXCJcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2dpbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tkYXRhLCBzZXREYXRhXX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvTG9naW5Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIERpdmlkZXIsXHJcbiAgSGVhZGluZyxcclxuICBIU3RhY2ssXHJcbiAgTGlzdEl0ZW0sXHJcbiAgVGV4dCxcclxuICBVbm9yZGVyZWRMaXN0LFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGpzb24sIExpbmssIExpbmtzLCBMb2FkZXJGdW5jdGlvbiwgT3V0bGV0LCByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbnNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOkxvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0fSkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKFxyXG4gICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxyXG4gICk7XHJcbiAgaWYgKHNlc3Npb24uaGFzKFwidXNlclNlc3Npb25cIikpIHtcclxuICAgIC8vIFJlZGlyZWN0IHRvIHRoZSBob21lIHBhZ2UgaWYgdGhleSBhcmUgYWxyZWFkeSBzaWduZWQgaW4uXHJcbiAgICBcclxuICAgIHJldHVybiB7c2hvd1BhZ2U6dHJ1ZX1cclxuICB9XHJcbiAgcmV0dXJuIHtzaG93UGFnZTpmYWxzZX1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG5cclxuICBjb25zdCB7c2hvd1BhZ2V9ID0gdXNlTG9hZGVyRGF0YSgpIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIHsvKiB7XHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHNob3dQYWdlKVxyXG4gICAgfSAqL31cclxuICAgIHtcclxuICAgICAgdHJ1ZSA/ICA8UHJpdmF0ZVBhZ2UgLz4gOiA8Tm90U2lnbkluUGFnZSAvPlxyXG4gICAgfVxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IE5vdFNpZ25JblBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgICAgPEhlYWRpbmc+VXNlciBOb3QgTG9nZWQgaW48L0hlYWRpbmc+XHJcbiAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IFByaXZhdGVQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxDb250YWluZXIgbWF4Vz1cIm9udGFpbmVyLmxnXCI+XHJcbiAgICA8SGVhZGluZyBweT1cIjNcIj5SeCBMYWJzPC9IZWFkaW5nPlxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgICB7LyogPERpdmlkZXIgc2l6ZT17XCIzXCJ9IGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiBvcmllbnRhdGlvbj0ndmVydGljYWwnIC8+ICovfVxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICBcclxuICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsICJpbXBvcnQge2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlfSBmcm9tIFwicmVtaXhcIlxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7Z2V0U2Vzc2lvbixjb21taXRTZXNzaW9uLGRlc3Ryb3lTZXNzaW9ufSAgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XHJcbiAgICBjb29raWU6e1xyXG4gICAgICAgIG5hbWU6XCJfX3Nlc3Npb25cIlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbiIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRGl2aWRlcixcclxuICBIZWFkaW5nLFxyXG4gIEhlYWRpbmdQcm9wcyxcclxuICBIU3RhY2ssXHJcbiAgSW5wdXQsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgT21pdENvbW1vblByb3BzLFxyXG4gIE9yZGVyZWRMaXN0LFxyXG4gIFNwYWNlcixcclxuICBUZXh0LFxyXG4gIFVub3JkZXJlZExpc3QsXHJcbiAgVlN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgU2xhdGVFZGl0b3IgZnJvbSBcIn4vY29tcG9uZW50cy9TbGF0ZUVkaXRvclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBNZW51LFxyXG4gIE1lbnVCdXR0b24sXHJcbiAgTWVudUxpc3QsXHJcbiAgTWVudUl0ZW0sXHJcbiAgTWVudUl0ZW1PcHRpb24sXHJcbiAgTWVudUdyb3VwLFxyXG4gIE1lbnVPcHRpb25Hcm91cCxcclxuICBNZW51RGl2aWRlcixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIE51bWJlcklucHV0LFxyXG4gIE51bWJlcklucHV0RmllbGQsXHJcbiAgTnVtYmVySW5wdXRTdGVwcGVyLFxyXG4gIE51bWJlckluY3JlbWVudFN0ZXBwZXIsXHJcbiAgTnVtYmVyRGVjcmVtZW50U3RlcHBlcixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVEb3duLCBBaUZpbGxXYXJuaW5nIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5pbXBvcnQgeyBQaW5JbnB1dCwgUGluSW5wdXRGaWVsZCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByZXNDb250ZXh0LCBQcmVzQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIn4vY29udGV4dC9wcmVzQ29udGV4dFwiO1xyXG5pbXBvcnQge1xyXG4gIEJyZWFkY3J1bWIsXHJcbiAgQnJlYWRjcnVtYkl0ZW0sXHJcbiAgQnJlYWRjcnVtYkxpbmssXHJcbiAgQnJlYWRjcnVtYlNlcGFyYXRvcixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgRmluZFBhdGllbnQgZnJvbSBcIn4vY29tcG9uZW50cy9GaW5kUGF0aWVudFwiO1xyXG5pbXBvcnQgTWFwRmluZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvTWFwRmluZGVyXCI7XHJcbmltcG9ydCB7QmlBcnJvd0JhY2t9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIC8vIGNvbnN0IFtkLHNldERdID0gdXNlQ29udGV4dChQcmVzQ29udGV4dClcclxuXHJcbiAgLy8gY29uc3QgYWRkTWFpbkRhdGEgPSAoZTphbnkpID0+IHtcclxuICAvLyBjb25zdCBvID0ge1xyXG4gIC8vICAgbmFtZURydWc6IFwiXCIsXHJcbiAgLy8gICBkb3NhZ2VGb3JtOiBcIlwiLFxyXG4gIC8vICAgbWc6IFwiXCIsXHJcbiAgLy8gICBkdXJhdGlvbjogXCJcIixcclxuICAvLyB9XHJcblxyXG4gIC8vIGxldCBsYXN0ID0gZFxyXG5cclxuICAvLyBsYXN0LnB1c2gobylcclxuXHJcbiAgLy8gc2V0RChsYXN0KVxyXG5cclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IFtzaG93UGFnZSwgc2V0U2hvd1BhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJlc0NvbnRleHRQcm92aWRlcj5cclxuICAgICAgICA8QnV0dG9uIG15PVwiM1wiIG1iPVwiM1wiPlxyXG4gICAgICAgICAgQ3JlYXRlIE5ld3tcIiBcIn1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICA8QnJlYWRjcnVtYiBweT1cIjNcIj5cclxuICAgICAgICAgICAgPEJyZWFkY3J1bWJJdGVtPlxyXG4gICAgICAgICAgICAgIDxCcmVhZGNydW1iTGluayBjb2xvcj1cImdyZWVuXCIgb25DbGljaz17KGUpID0+IHNldFNob3dQYWdlKDApfT5cclxuICAgICAgICAgICAgIDxIU3RhY2s+ICA8QmlBcnJvd0JhY2sgLz4gIDxUZXh0PiBGaW5kIFBhdGllbnQ8L1RleHQ+PC9IU3RhY2s+XHJcbiAgICAgICAgICAgICAgPC9CcmVhZGNydW1iTGluaz5cclxuICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAge3Nob3dQYWdlID09PSAxID8gKFxyXG4gICAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iTGluayBocmVmPVwiI1wiPm5hbWUgb2YgUGF0aWVudDwvQnJlYWRjcnVtYkxpbms+XHJcbiAgICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L0JyZWFkY3J1bWI+XHJcbiAgICAgICAgICB7LyogPE1hcEZpbmRlciAvPiAqL31cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICB7c2hvd1BhZ2UgPT09IDEgPyAoXHJcbiAgICAgICAgICA8VlN0YWNrIGp1c3RpZnlDb250ZW50PXtcImZsZXgtc3RhcnRcIn0gYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgPEhTdGFja1xyXG4gICAgICAgICAgICAgIHc9XCJmdWxsXCJcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD17XCJzcGFjZS1iZXR3ZWVuXCJ9XHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFZpZXdlciAvPlxyXG5cclxuICAgICAgICAgICAgICA8T2xkUHJlc2NyaXB0aW9ucyAvPlxyXG4gICAgICAgICAgICA8L0hTdGFjaz5cclxuPEhTdGFjayAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYmV0d2VlblwifSBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIj5cclxuICBcclxuPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cucHJpbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJpbnRcIik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFx1RDgzRFx1RERBOFx1RkUwRlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgey8qIDxCdXR0b24+U2VhcmNoIE5lYXJlc3QgU3RvcmU8L0J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9PlNhdmUgUHJlc2NyaXB0aW9uIDwvQnV0dG9uPlxyXG48L0hTdGFjaz5cclxuICAgICAgICAgIDwvVlN0YWNrPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8RmluZFBhdGllbnQgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L1ByZXNDb250ZXh0UHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBPbGRQcmVzY3JpcHRpb25zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VlN0YWNrIHBsPVwiOVwiIHB0PVwiM1wiIG1yPVwiMTVcIiBhbGlnbkl0ZW1zPXtcImZsZXgtc3RhcnRcIn0+XHJcbiAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiMnhsXCI+T2xkIFByZXNjcmlwdGlvbnM8L0hlYWRpbmc+XHJcbiAgICAgIDxVbm9yZGVyZWRMaXN0PlxyXG4gICAgICAgIDxMaXN0SXRlbSBsaXN0U3R5bGVUeXBlPVwibm9uZVwiPmRhdGUgMTctMTUtODc8L0xpc3RJdGVtPlxyXG4gICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICA8L1ZTdGFjaz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgVmlld2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkLCBzZXREXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpO1xyXG4gIGNvbnN0IGFkZFJvdyA9IChlOiBhbnkpID0+IHtcclxuICAgIGxldCBvbGREYXRhID0gW107XHJcblxyXG4gICAgZC5tYXAoKG9sZEQ6IGFueSkgPT4ge1xyXG4gICAgICBvbGREYXRhLnB1c2gob2xkRCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBvbGREYXRhLnB1c2goe1xyXG4gICAgICBuYW1lRHJ1ZzogXCJcIixcclxuICAgICAgZG9zYWdlRm9ybTogXCJcIixcclxuICAgICAgbWc6IFwiXCIsXHJcbiAgICAgIGR1cmF0aW9uOiBcIlwiLFxyXG4gICAgICBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXREKG9sZERhdGEpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxQcmVzQm94IC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgYWRkUm93KGUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgK1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcmVzQm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkLCBzZXREXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgey8qIDxQcmVzU3RhY2sgLz5cclxuICAgICAgPFByZXNTdGFjayAvPlxyXG4gICAgICA8UHJlc1N0YWNrIC8+ICovfVxyXG48SFN0YWNrPlxyXG48L0hTdGFjaz5cclxuICAgICAge2QubWFwKChyOiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gPFByZXNTdGFjayBkYXRhPXtyfSAvPjtcclxuICAgICAgfSl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJlc1N0YWNrID0gKHsgZGF0YSB9OiBhbnkpID0+IHtcclxuICBjb25zdCBbcHJlQ29uLCBzZXRQcmVDb25dID0gdXNlQ29udGV4dChQcmVzQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZURhdGEgPSAoZTogYW55LCBpZDogYW55LCB0eXBlOiBhbnkpID0+IHtcclxuICAgIGxldCBvbGREID0gcHJlQ29uO1xyXG4gICAgbGV0IG5ld0xpc3Q6IGFueSA9IFtdO1xyXG4gICAgb2xkRC5tYXAoKG9sZGQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAob2xkZC5pZCA9PT0gaWQpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgXCJuYW1lRHJ1Z1wiOlxyXG4gICAgICAgICAgICBsZXQgdG1wRGF0YSA9IHtcclxuICAgICAgICAgICAgICBuYW1lRHJ1ZzogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgZG9zYWdlRm9ybTogb2xkZC5kb3NhZ2VGb3JtLFxyXG4gICAgICAgICAgICAgIG1nOiBvbGRkLm1kLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBvbGRkLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgIGlkOiBvbGRkLmlkLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHRtcERhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRvc2FnZUZvcm1cIjpcclxuICAgICAgICAgICAgICBsZXQgdG1wRGF0YURvc2UgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lRHJ1Zzogb2xkZC5uYW1lRHJ1ZyxcclxuICAgICAgICAgICAgICAgIGRvc2FnZUZvcm06IGUsXHJcbiAgICAgICAgICAgICAgICBtZzogb2xkZC5tZCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBvbGRkLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgaWQ6IG9sZGQuaWQsXHJcbiAgICAgICAgICAgICAgfTtcclxuICBcclxuICAgICAgICAgICAgICBuZXdMaXN0LnB1c2godG1wRGF0YURvc2UpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGlzdC5wdXNoKG9sZGQpO1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhuZXdMaXN0LFwiTkVXIExJU1RcIik7XHJcbiAgICBjb25zb2xlLmxvZyhvbGRELFwiT0xEIExJU1RcIik7XHJcbiAgICBzZXRQcmVDb24obmV3TGlzdClcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBweT1cIjNcIiB3PVwiZnVsbFwiIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIj5cclxuICAgICAgey8qIDxUZXh0IGNvbG9yPVwicmVkICBcIj48QWlGaWxsV2FybmluZyAvPjwvVGV4dD4gKi99XHJcbiAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJlQ29uKX0gKi99XHJcbiAgICAgIDxWU3RhY2s+XHJcbiAgICAgICAgPFRleHQ+RHJ1ZzwvVGV4dD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG14PVwiMVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWUgb2YgRHJ1Z1wiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5uYW1lRHJ1Z31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlRGF0YShlLCBkYXRhLmlkLCBcIm5hbWVEcnVnXCIpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgICA8U3BhY2VyIC8+XHJcbiAgICAgIDxWU3RhY2sgbXg9XCIyXCI+XHJcbiAgICAgICAgPFRleHQ+IERvc2FnZSBGb3JtPC9UZXh0PlxyXG4gICAgICAgIDxNZW51XHJcbiAgICAgICAgICBcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudUJ1dHRvblxyXG4gICAgICAgICAgICB2YWx1ZT17ZGF0YS5kb3NhZ2VGb3JtfVxyXG4gICAgICAgICAgICBhcz17QnV0dG9ufVxyXG4gICAgICAgICAgICByaWdodEljb249ezxBaU91dGxpbmVEb3duIC8+fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YS5kb3NhZ2VGb3JtfVxyXG4gICAgICAgICAgPC9NZW51QnV0dG9uPlxyXG4gICAgICAgICAgPE1lbnVMaXN0PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwib2ludG1lbnRzXCIsIGRhdGEuaWQsIFwiZG9zYWdlRm9ybVwiKX0+T2ludG1lbnRzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2UgPT4gdXBkYXRlRGF0YShcInN5cnVwXCIsIGRhdGEuaWQsIFwiZG9zYWdlRm9ybVwiKX0+c3lydXA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwidGFibGV0c1wiLCBkYXRhLmlkLCBcImRvc2FnZUZvcm1cIil9PlRhYmxldDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtlID0+IHVwZGF0ZURhdGEoXCJwb3dkZXJcIiwgZGF0YS5pZCwgXCJkb3NhZ2VGb3JtXCIpfT5Qb3dkZXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwicGlsbHNcIiwgZGF0YS5pZCwgXCJkb3NhZ2VGb3JtXCIpfT5QaWxsczwvTWVudUl0ZW0+XHJcbiAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgIDwvTWVudT5cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgPFZTdGFjayBteD1cIjJcIj5cclxuICAgICAgICA8VGV4dD5Eb3NlIG1nPC9UZXh0PlxyXG4gICAgICAgIDxOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgbXg9XCIzXCJcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MTV9XHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5tZ31cclxuICAgICAgICAgIHByZWNpc2lvbj17Mn1cclxuICAgICAgICAgIHN0ZXA9ezAuMn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TnVtYmVySW5wdXRGaWVsZCAvPlxyXG4gICAgICAgICAgPE51bWJlcklucHV0U3RlcHBlcj5cclxuICAgICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgICAgPE51bWJlckRlY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgIDwvTnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgIDwvTnVtYmVySW5wdXQ+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG5cclxuICAgICAgey8qIFBpbiBJbnB1dCAqL31cclxuICAgICAgPFZTdGFjayBteD1cIjJcIj5cclxuICAgICAgICA8VGV4dD5EdXJhdGlvbjwvVGV4dD5cclxuICAgICAgICA8SFN0YWNrPlxyXG4gICAgICAgICAgPFBpbklucHV0IGRlZmF1bHRWYWx1ZT17ZGF0YS5kdXJhdGlvbn0+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICAgIDxQaW5JbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICA8L1BpbklucHV0PlxyXG4gICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0PGFueT4obnVsbCk7XHJcbi8vIGltcG9ydCB1dWlkIGZyb20gXCJ1dWlkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJlc0NvbnRleHRQcm92aWRlciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgXHJcblxyXG4gIGNvbnN0IG1haW5EYXRhID0gW3tcclxuICAgICAgbmFtZURydWc6XCJwYXJhY2V0YW1vbFwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOlwic3lydXBcIixcclxuICAgICAgbWc6XCIxNlwiLFxyXG4gICAgICBkdXJhdGlvbiA6XCIxMDFcIixcclxuICB9LHtcclxuICAgICAgbmFtZURydWc6XCJ3YXJmYXJpblwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOlwibG90aW9uXCIsXHJcbiAgICAgIG1nOlwiMTZcIixcclxuICAgICAgZHVyYXRpb24gOlwiMTExXCJcclxuICB9XVxyXG5cclxuLy8gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShtYWluRGF0YSlcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXHJcbiAgICB7XHJcbiAgICAgIG5hbWVEcnVnOiBcIlwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOiBcIlwiLFxyXG4gICAgICBtZzogXCJcIixcclxuICAgICAgZHVyYXRpb246IFwiXCIsXHJcbiAgICAgIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcmVzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W2RhdGEsIHNldERhdGFdfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9QcmVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCAiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIEZvcm1MYWJlbCxcclxuICBUYWIsXHJcbiAgVGFiTGlzdCxcclxuICBUYWJQYW5lbCxcclxuICBUYWJQYW5lbHMsXHJcbiAgVGFicyxcclxuICBUZXh0LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIHVzZUFjdGlvbkRhdGEgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgZmlyZUF1dGgsIGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCI7XHJcbmltcG9ydCB7IExvZ2luQ29udGV4dCB9IGZyb20gXCJ+L2NvbnRleHQvbG9naW5EYXRhQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IGZvcm1BY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIik7XHJcbiAgbGV0IGVtYWlsID0gZm9ybS5nZXQoXCJlbWFpbFwiKTtcclxuICBsZXQgZG9jRW1haWwgPSBmb3JtLmdldChcImRvY0VtYWlsXCIpO1xyXG4gIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuXHJcbiAgY29uc3QgY29sID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJyeHBhdFwiKTtcclxuICBjb25zdCBsYWJDb2wgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInJ4TGFic1VzZXJzXCIpO1xyXG4gIGxldCBtc2c7XHJcbiAgc3dpdGNoIChmb3JtQWN0aW9uKSB7XHJcbiAgICBjYXNlIFwiY3JlYXRlUGF0XCI6XHJcbiAgICAgIGNvbFxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKChzbmFwKSA9PiB7XHJcbiAgICAgICAgICBzbmFwLmZvckVhY2goKG0pID0+IHtcclxuICAgICAgICAgICAgaWYgKG0uZGF0YSgpLmVtYWlsID09PSBlbWFpbCkge1xyXG4gICAgICAgICAgICAgIC8vIG1zZyA9IHsgc3RhdHVzOiB0cnVlLCBsb2dpbjp0cnVlICxkYXRhOm0uZGF0YSgpfTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobS5kYXRhKCksXCJDUkVBVEUgUEFUIDAxXCIpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxhYkNvbC5nZXQoKS50aGVuKChzbmFwTGFicykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc25hcExhYnMuZm9yRWFjaCgoc2wpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHNsLmRhdGEoKS5lbWFpbCA9PT0gZG9jRW1haWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgbGlzdCBvZiBwYXRhdFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0T2ZQYXQgPSBzbC5kYXRhKCkucGF0TGlzdDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkTGlzdCA9IGxpc3RPZlBhdC5wdXNoKGVtYWlsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29sXHJcbiAgICAgICAgICAgICAgICAgICAgICAuYWRkKHsgb2xkTGlzdCwgLi4uc2wuZGF0YSgpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZWQgaW4gdGhlIGRhdGFiYXNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJFUlJPUiBEVVJJTkcgU0FWSU5HIElOIERBVEFCQVNFIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgbXNnID0geyBzdGF0dXM6IHRydWUsIGxvZ2luOiBmYWxzZSwgZGF0YTogZXJyIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhtc2cpO1xyXG5cclxuICByZXR1cm4gbXNnO1xyXG59O1xyXG5cclxuY29uc3QgRmluZFNhdmVkUGF0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHB0PVwiM1wiXHJcbiAgICAgIGJvcmRlcj17XCIzcHhcIn1cclxuICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzB2d1wiLCBtaW5IZWlnaHQ6IFwiNDB2aFwiIH19XHJcbiAgICAgIHA9XCIzXCJcclxuICAgICAgbXQ9XCIzXCJcclxuICAgICAgdz1cIjYwXCJcclxuICAgID5cclxuICAgICAgPEZvcm1MYWJlbD5QYXRpZW50IElkPC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dCBtYj1cIjFcIiBteT1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJwYXRpZW50IGlkXCIgLz5cclxuXHJcbiAgICAgIDxGb3JtTGFiZWw+UGF0aWVudCBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dCBteT1cIjFcIiBtYj1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz5cclxuICAgICAgPEZvcm1MYWJlbD5QYXRpZW50IFBob25lTnVtYmVyPC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dCBtYj1cIjFcIiBteT1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIiAvPlxyXG5cclxuICAgICAgPEJ1dHRvbiBteT1cIjNcIj5TZWFyY2g8L0J1dHRvbj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDcmVhdGVOZXdQYXRpZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlLCBzZXRFXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkLCBzZXREXSA9IHVzZUNvbnRleHQoTG9naW5Db250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgcHQ9XCIzXCJcclxuICAgICAgYm9yZGVyPXtcIjNweFwifVxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogXCIzMHZ3XCIsIG1pbkhlaWdodDogXCI0MHZoXCIgfX1cclxuICAgICAgcD1cIjNcIlxyXG4gICAgICBtdD1cIjNcIlxyXG4gICAgICB3PVwiNjBcIlxyXG4gICAgPlxyXG4gICAgICA8Rm9ybUxhYmVsPlBhdGllbnQgRW1haWwgSWQ8L0Zvcm1MYWJlbD5cclxuICAgICAgPElucHV0XHJcbiAgICAgICAgbWI9XCIxXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgbXk9XCIxXCJcclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIHZhbHVlPXtlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicGF0aWVudCBFbWFpbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dCB2YWx1ZT17ZC5lbWFpbH0gbmFtZT1cImRvY0VtYWlsXCIgLz5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIG09XCIzXCJcclxuICAgICAgICBuYW1lPVwiX2FjdGlvblwiXHJcbiAgICAgICAgdmFsdWU9e1wiY3JlYXRlUGF0XCJ9XHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgY29sb3JTY2hlbWU9e1wiZ3JlZW5cIn1cclxuICAgICAgPlxyXG4gICAgICAgIGNyZWF0ZSBQYXRpZW50XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEdldEFsbFBhdGllbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxUZXh0PkdldCBhbGwgUGF0aWVudDwvVGV4dD47XHJcbn07XHJcblxyXG5mdW5jdGlvbiBGaW5kUGF0aWVudCgpIHtcclxuICBjb25zdCBBY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhBY3Rpb25EYXRhKTtcclxuXHJcbiAgICBpZiAoQWN0aW9uRGF0YSkge1xyXG4gICAgICAvLyBzZXREKEFjdGlvbkRhdGEuZGF0YSlcclxuICAgIH1cclxuICB9LCBbQWN0aW9uRGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzdHlsZT17eyB3aWR0aDogXCI2MHZ3XCIgfX0+XHJcbiAgICAgIDxUYWJzPlxyXG4gICAgICAgIDxUYWJMaXN0PlxyXG4gICAgICAgICAgPFRhYj5Mb2dpbjwvVGFiPlxyXG4gICAgICAgICAgPFRhYj5DcmVhdGUgTmV3IFBhdGllbnQ8L1RhYj5cclxuICAgICAgICAgIDxUYWI+R2V0IGFsbCBQYXRpZW50PC9UYWI+XHJcbiAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgIDxUYWJQYW5lbHM+XHJcbiAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxGaW5kU2F2ZWRQYXQgLz5cclxuICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxDcmVhdGVOZXdQYXRpZW50IC8+XHJcbiAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICA8R2V0QWxsUGF0aWVudCAvPlxyXG4gICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICA8L1RhYlBhbmVscz5cclxuICAgICAgPC9UYWJzPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxue1xyXG4gIC8qIDxCb3ggc3R5bGU9e3sgd2lkdGg6IFwiNjB2d1wiIH19PlxyXG48VGFicz5cclxuICA8VGFiTGlzdD5cclxuICAgIDxUYWI+TG9naW48L1RhYj5cclxuICAgIDxUYWI+Q3JlYXRlIE5ldyBVc2VyPC9UYWI+XHJcbiAgPC9UYWJMaXN0PlxyXG4gIDxUYWJQYW5lbHM+XHJcbiAgICA8VGFiUGFuZWw+XHJcbiAgICAgIDxMb2dpblVzZXIgLz5cclxuICAgIDwvVGFiUGFuZWw+XHJcbiAgICA8VGFiUGFuZWw+XHJcbiAgICAgIDxDcmVhdGVOZXdVc2VyIC8+XHJcbiAgICA8L1RhYlBhbmVsPlxyXG4gIDwvVGFiUGFuZWxzPlxyXG48L1RhYnM+XHJcbjwvQm94PiAqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaW5kUGF0aWVudDtcclxuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGFwcGxpY2F0aW9uRGVmYXVsdCwgY2VydCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hcHBcIjtcclxubGV0IGFkbWluID0gcmVxdWlyZShcImZpcmViYXNlLWFkbWluXCIpXHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hdXRoXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGE6YW55ID0ge1xyXG4gIFwidHlwZVwiOiBcInNlcnZpY2VfYWNjb3VudFwiLFxyXG4gIFwicHJvamVjdF9pZFwiOiBcInJ1ZGhyYWpvc2hpY29tXCIsXHJcbiAgXCJwcml2YXRlX2tleV9pZFwiOiBcIjlmZWYzNmIyNzlhNDE5NDhlNjY0MzQzNGRmOTczMjA4MWE1YmQyOTVcIixcclxuICBcInByaXZhdGVfa2V5XCI6IFwiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXFxuTUlJRXZRSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2N3Z2dTakFnRUFBb0lCQVFEQmFQYlNJSTNUaXZzK1xcbkQ5aUVpT2VtN2VRYzNuRHJ1QlVEMExNMVFRMmJtTUMzVVFZZ1d5TWlIL3VucGhOc0kyN2NUOE1wVXYxN251M1JcXG40SmJ0MnM1M1plRURzREVyS1pVSG5MenhiK2U4emI3bEFZT3NNekthdHFTTlB1T0hod0I4YVNTSkFxd0ZDMXVwXFxuV24rblU3N09WdmxIYmJoQ1FvK3dHc3pLOVNpczBNY2pNWVhxd3Z0eTI1UjZsM3dya3NSOWRlUG1mS0pKSlYwOVxcbjloTjduYXN2dTBIbWczZzlTVXlId1ZWYURXMGcvM1VWQTlzeTJCZG9TZDVpOHNlMUwreU5RbmMrWWhWcllZTFNcXG5wVGRMS3ZaTmgrZ0x2RitEdXF5Y2l5MktxYkVNdlM2U1JUMkFybVllRytxUWhsK1dWUndMU0JzUUFGNHdRQWdJXFxubnU3M1o4SnRBZ01CQUFFQ2dnRUFHQ0p5K2xHWm9SWXN0OWZlV3R1Q25LLyswU05veitGT3JnVXk5NmhBZkhRWlxcblNFYlNEdU9RaE1lYzdaU3B3OHJBSUxuTFRyTE9jc2lvUUpKWUF5SlV0VTEvUUtpUjJpTDhOOUQxT3VPTjlWOXZcXG5QTUJ0bitWYm9UYTlYZXJGRmJwZzh5VmpxNzBybmcyR3lLRkVZS3J3bW1yNy9FL1N1R0g1OEMzSDlHT1hTY2trXFxuSHVLNmpTb1lsYUN1elR6enJUWHBacUEwQ0x0S3E3KzBBWXpOV3N1VmozTm9SUE1LdVN0WDNmNU5qVmpsbWFrZlxcbk94ZE80VXk5U2RrM1VLMWM4TTIzVzJySjZQeGlHVXRPUkRBYTIzd21ydlgvdjFINmZwSWdJNW5DZ1VuY0w2VjVcXG43NHIzbVliMGVGSk1PeFpZOWVCWGEyMy94Z2hHU1lNdWpSa3hRdW5NQVFLQmdRRG1naFB4eUg3ejhoYVFldkhKXFxuMzhGdGNUUlg5dU9DcmVieUdIV3VJak1VL3FFejdIY0FUUVBTUlJvL05KRzVuclBqRVM2NzNsZzMwTG8zTTZFVVxcbnJaemgxRFdMajhsUkVFZ3BNQ2oycUVLMFowTENvUHFNb3pDY3dSWm1MYjVaTGtQRXViUWQrMjdiSWNHK0I5dGJcXG54dHlXWGhpcUpFVzBRTTZsaGJOVzV3NllnUUtCZ1FEV3pKbk8vTjU5Rm14WnhjNWN4Um14ejZvMGNkZC9yUE1zXFxuTCs1K1I0dEJvOVNCeWR6bHZwODVPNEtaMGVPSlcyVEY2TlQvZ2JheTMwci8xdldkelBRajZ3R2NIWmI2NVlxdVxcbnU4UlgwRlFQdDJzd1pRR0FOL3RidnRrU1pWd2RhTmltMnhzQ3RLL2NKYVlaVlMvZGpQRUFCSXBQREtpdmc1WnlcXG5ONHlycUJNVDdRS0JnUUNKZkJKTFJ1dTVzcTRVdE0vY09aSlVKWTR6M1RUcnI2K3N2RHdNaGFkMElUK2pDYW9jXFxueXRLNXFxK3gvVGZodjYvSmdta2Vjc3FwVjl5SnFraXNYYlRSMlZHcWtUTmhIMVg3QXhlYnJ0WkNaY2lpNzRNaFxcbk9RQjRybzRlbWJBTDN4VmFrK3pEYVVGQWdFemZmQzR3K2xaOWRWZyt1dTI4U2w4MnlKMGoreUp3Z1FLQmdGdmJcXG5IeU5QSys0ZU9yT2hUWUNLb1ZSUzFCeWRXbVMxRjBDY05zYzEzUzF5M0J1c3NaUm1FajB0WDhwYjRZd0owMngzXFxuQnk5RXoxWnErdTJ4aFZPNEkrZUFSaTMyMFd2MTRYcWJ2WGs0RTlxc3UxLzBzZEdkSHhhNjVLVmpSeU1raFJIRlxcbnZTVkpFN04zUGpLekpVYi9VTWlMS0lKcGpYR1JPak1aNGtRK0dmcDVBb0dBUjh4dCsrTW96Vk9iOXZ0RjF1VExcXG4yM0ZscUhCdVNxblJNcXNnaVd0UklBKzlNKzAzeFJEUEo4ek8wbUltbVArdHB5UzZqREdnR1pFMk1jcXgvcEUvXFxuSUNhTVZQR2pzWFlkYnAyNzBjMGsyZkgyWi90VlhBZ3JIaHpHZ01CZ3ppY2NXSDY3Um44bWdqeDNUMmFxbFhkdFxcbmdOTUFPUmlDSU8rTFMrY2V4WVJZRkxrPVxcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cXG5cIixcclxuICBcImNsaWVudF9lbWFpbFwiOiBcImZpcmViYXNlLWFkbWluc2RrLXh1ZDE4QHJ1ZGhyYWpvc2hpY29tLmlhbS5nc2VydmljZWFjY291bnQuY29tXCIsXHJcbiAgXCJjbGllbnRfaWRcIjogXCIxMTEwOTczMjM3NDU3NDA1MTU5ODlcIixcclxuICBcImF1dGhfdXJpXCI6IFwiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGhcIixcclxuICBcInRva2VuX3VyaVwiOiBcImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuXCIsXHJcbiAgXCJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHNcIixcclxuICBcImNsaWVudF94NTA5X2NlcnRfdXJsXCI6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9maXJlYmFzZS1hZG1pbnNkay14dWQxOCU0MHJ1ZGhyYWpvc2hpY29tLmlhbS5nc2VydmljZWFjY291bnQuY29tXCJcclxufVxyXG5pbml0aWFsaXplQXBwKHtjcmVkZW50aWFsOmNlcnQoYSl9KTtcclxuZXhwb3J0IGNvbnN0IGZpcmVzdG9yZSA9IGdldEZpcmVzdG9yZSgpO1xyXG5leHBvcnQgY29uc3QgZmlyZUF1dGggPSBnZXRBdXRoKCk7XHJcblxyXG5cclxuIiwgImltcG9ydCB7IEhlYWRpbmcgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjb2xsZWN0aW9uVXNlciA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcblxyXG4gIGxldCByZXMgPSBhd2FpdCBjb2xsZWN0aW9uVXNlclxyXG4gICAgLmRvYygpXHJcbiAgICAuc2V0KHsgZmlyc3Q6IFwiSmhzb25cIiwgbGFzdDogXCJEb2VcIiwgZW1haWw6IFwicnVkcmFAZ21pYWwuY29tXCIgfSk7XHJcblxyXG4gIHJldHVybiB7IG1zZzogXCJzYXZlZCBkYXRhXCIsIHJlcyB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgcG9zdCA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkaW5nPkhvbWUgUGFnZTwvSGVhZGluZz5cclxuICAgICAge0pTT04uc3RyaW5naWZ5KHBvc3QpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIEZvcm1IZWxwZXJUZXh0LFxyXG4gIEZvcm1MYWJlbCxcclxuICBIZWFkaW5nLFxyXG4gIEhTdGFjayxcclxuICBJbnB1dCxcclxuICBTcGFjZXIsXHJcbiAgVGFiLFxyXG4gIFRhYkxpc3QsXHJcbiAgVGFiUGFuZWwsXHJcbiAgVGFiUGFuZWxzLFxyXG4gIFRhYnMsXHJcbiAgdXNlVG9hc3QsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsganNvbiB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UtYWRtaW4vYXV0aFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEFjdGlvbkZ1bmN0aW9uLFxyXG4gIEZvcm0sXHJcbiAgcmVkaXJlY3QsXHJcbiAgdXNlQWN0aW9uRGF0YSxcclxuICB1c2VTdWJtaXQsXHJcbiAgdXNlVHJhbnNpdGlvbixcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgTG9naW5Db250ZXh0IH0gZnJvbSBcIn4vY29udGV4dC9sb2dpbkRhdGFDb250ZXh0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUFuZFNhdmVTZXNzaW9uIH0gZnJvbSBcIn4vbG9naWMvc2Vzc2lvbkF1dHJoTG9naWNcIjtcclxuaW1wb3J0IHsgY29tbWl0U2Vzc2lvbiB9IGZyb20gXCJ+L3Nlc3Npb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUN1c3Rvcm1Ub2tlbiwgY3JlYXRlVXNlciB9IGZyb20gXCJ+L3V0aWxzL2F1dGguc2VydmVyXCI7XHJcbmltcG9ydCB7IGZpcmVBdXRoLCBmaXJlc3RvcmUgfSBmcm9tIFwifi91dGlscy9maXJlLnNlcnZlclwiO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xyXG4vLyAgIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbi8vICAgbGV0IGZvcm1BY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIik7XHJcbi8vICAgbGV0IGVtYWlsID0gZm9ybS5nZXQoXCJlbWFpbFwiKTtcclxuLy8gICBsZXQgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xyXG4vLyAgIGxldCBwcm9maWxlTmFtZSA9IGZvcm0uZ2V0KFwicHJvZmlsZU5hbWVcIik7XHJcblxyXG4vLyAgIGNvbnN0IGNvbCA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcbi8vICAgbGV0IHJlcyA6IGFueTtcclxuLy8gICBpZiAoZm9ybUFjdGlvbiA9PT0gXCJjcmVhdGV1c2VyXCIpIHtcclxuLy8gICAgIGlmIChlbWFpbCAmJiBwYXNzd29yZCAmJiBwcm9maWxlTmFtZSkge1xyXG4vLyAgICAgICBhd2FpdCBjcmVhdGVVc2VyKHtcclxuLy8gICAgICAgICBlbWFpbCxcclxuLy8gICAgICAgICBwYXNzd29yZCxcclxuLy8gICAgICAgICBkaXNwbGF5TmFtZTogcHJvZmlsZU5hbWUsXHJcbi8vICAgICAgIH0pLnRoZW4oYXN5bmMgKHVzZXJSZWNvcmQpID0+IHtcclxuLy8gICAgICAgICByZXMgPSB7IHN0YXR1czogdHJ1ZSwgaWQ6IHVzZXJSZWNvcmQudWlkIH07XHJcbi8vICAgICAgICAgYXdhaXQgY3JlYXRlQW5kU2F2ZVNlc3Npb24odXNlclJlY29yZC51aWQscmVxdWVzdClcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuLy8gICByZXR1cm4gcmVzLnN0YXR1cyA/IHJlZGlyZWN0KFwiL2Rhc2hib2FyZFwiKSA6IHJlc1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH06IGFueSkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XHJcbiAgbGV0IGZvcm1BY3Rpb24gPSBmb3JtLmdldChcIl9hY3Rpb25cIik7XHJcbiAgbGV0IGVtYWlsID0gZm9ybS5nZXQoXCJlbWFpbFwiKTtcclxuICBsZXQgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xyXG4gIGxldCBkaXNwbGF5TmFtZSA9IGZvcm0uZ2V0KFwicHJvZmlsZU5hbWVcIik7XHJcbiAgbGV0IGNlbnRlck5hbWUgPSBmb3JtLmdldChcImNlbnRlck5hbWVcIik7XHJcblxyXG4gIGNvbnN0IGNvbCA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwicnhMYWJzVXNlcnNcIik7XHJcblxyXG4gIGxldCBtc2c6IGFueSA9IFwiXCI7XHJcbiAgY29uc3QgY29sbGVjdGlvblVzZXIgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInJ4TGFic1VzZXJzXCIpO1xyXG5sZXQgcmVzO1xyXG5cclxuICBzd2l0Y2ggKGZvcm1BY3Rpb24pIHtcclxuICAgIGNhc2UgXCJjcmVhdGVVc2VyXCI6XHJcblxyXG4gICAgICAgcmVzID0gYXdhaXQgY29sbGVjdGlvblVzZXJcclxuICAgICAgICAuZG9jKClcclxuICAgICAgICAuc2V0KHsgZW1haWwsIGRpc3BsYXlOYW1lLCBwYXNzd29yZCB9KTtcclxuICAgICAgbXNnID0geyBzdGF0dXM6IHRydWUsIHJlcyB9O1xyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibG9naW5Vc2VyXCI6XHJcbiAgICAgIFxyXG4gICAgcmVzID0gYXdhaXQgY29sbGVjdGlvblVzZXIuZ2V0KCkudGhlbihzbmFwID0+IHtcclxuICAgICAgc25hcC5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgIGlmKGVtYWlsID09PSBkLmRhdGEoKS5lbWFpbCAmJiBwYXNzd29yZCA9PT0gZC5kYXRhKCkucGFzc3dvcmQpe1xyXG4gICAgICAgICAgbXNnID0geyBzdGF0dXM6IHRydWUsIGxvZ2luOnRydWUgLGRhdGE6ZC5kYXRhKCl9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KVxyXG5cclxuICAgICAgLy8gbGV0IHJlcyA9IGF3YWl0IGNvbGxlY3Rpb25Vc2VyLmdldFxyXG5cclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICAvLyByZXR1cm4gbXNnLnN0YXR1cyA/IHJlZGlyZWN0KGAvZGFzaGJvYXJkP2VtYWlsPSR7fWApIDogbXNnO1xyXG4gIHJldHVybiBtc2cuc3RhdHVzID8gIG1zZyA6IG51bGw7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBBY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xyXG4gIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKTtcclxuY29uc3QgW2Qsc2V0RF0gPSB1c2VDb250ZXh0KExvZ2luQ29udGV4dClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coQWN0aW9uRGF0YSk7XHJcbiAgICBcclxuICAgIGlmKEFjdGlvbkRhdGEpe1xyXG4gICAgICBzZXREKEFjdGlvbkRhdGEuZGF0YSlcclxuICAgIH1cclxuICB9LFtBY3Rpb25EYXRhXSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIG1heEg9XCJjb250YWluZXIubGdcIj5cclxuICAgICAgXHJcbiAgICBcclxuICAgICAgPEJveFxyXG4gICAgICAgIGRpc3BsYXk9e1wiZmxleFwifVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICBtdD1cIjMwXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzdHlsZT17eyB3aWR0aDogXCI2MHZ3XCIgfX0+XHJcbiAgICAgICAgICA8VGFicz5cclxuICAgICAgICAgICAgPFRhYkxpc3Q+XHJcbiAgICAgICAgICAgICAgPFRhYj5Mb2dpbjwvVGFiPlxyXG4gICAgICAgICAgICAgIDxUYWI+Q3JlYXRlIE5ldyBVc2VyPC9UYWI+XHJcbiAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuICAgICAgICAgICAgPFRhYlBhbmVscz5cclxuICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5Vc2VyIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8Q3JlYXRlTmV3VXNlciAvPlxyXG4gICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDwvVGFiUGFuZWxzPlxyXG4gICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IExvZ2luVXNlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgIDxGb3JtTGFiZWw+Q2VudGVyPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwiY2VudGVyXCJcclxuICAgICAgICAgIHR5cGU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGlnaXRhbCBMYWJzXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuXHJcbiAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgIHsvKiBBbGwgT2xkIGlucHV0cyBEb3duKi99XHJcbiAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPEhTdGFjayBtdD1cIjZcIiBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtcImxvZ2luVXNlclwifVxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY29sb3JTY2hlbWU9e1wiZ3JlZW5cIn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ3JlYXRlTmV3VXNlciA9ICgpID0+IHtcclxuICBjb25zdCBBY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgIDxGb3JtTGFiZWw+UHJvZmlsZSBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbmFtZT1cInByb2ZpbGVOYW1lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSmhvbiBEb2VcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxGb3JtTGFiZWw+RW1haWw8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiamhvbkBnbWFpbC5jb21cIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxGb3JtSGVscGVyVGV4dD5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5QYXNzd29yZDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5DZW50cmUgTmFtZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG5hbWU9XCJjZW50ZXJOYW1lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2VudGVyIE5hbWVcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIHsvKiA8Rm9ybUxhYmVsPkxpY2VuY2U8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvLyBuYW1lPVwibGljZW5jZVwiXHJcbiAgICAgICAgICAvLyBwbGFjZWhvbGRlcj1cIkpob24gRG9lXCJcclxuICAgICAgICA+PC9JbnB1dD4gKi99XHJcbiAgICAgICAgPFNwYWNlciAvPlxyXG4gICAgICAgIDxIU3RhY2sgbXQ9XCI2XCIganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgbmFtZT1cIl9hY3Rpb25cIlxyXG4gICAgICAgICAgICB2YWx1ZT17XCJjcmVhdGVVc2VyXCJ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XCJncmVlblwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDcmVhdGUgUHJvZmlsZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBwcmVzY3JpcHRpb25cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYjQxYjIzNDUnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LUlCVVJGUFhVLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1QWVlHQ1BTUS5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtMlFNREk3VFIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNZV0JON0s2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSldHWllWNlEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL0xvZ2luJzp7J2lkJzoncm91dGVzL0xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J0xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL0xvZ2luLTNYUkgyRlBRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JM0NNTDZTNC5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9kYXNoYm9hcmQnOnsnaWQnOidyb3V0ZXMvZGFzaGJvYXJkJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Rhc2hib2FyZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQtTlU2UFdRQkUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZC9pbmRleCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZGFzaGJvYXJkL2luZGV4LUVVU1VTR0pBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zWVdCTjdLNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUkzQ01MNlM0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSldHWllWNlEuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVVCQVI3Mjc0LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1JM0NNTDZTNC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtQjQxQjIzNDUuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pE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
