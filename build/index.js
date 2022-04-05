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
  }, /* @__PURE__ */ import_react12.default.createElement(import_remix6.Form, {
    method: "post"
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
  }, "create Patient")));
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
  const [a2, setA] = (0, import_react18.useState)("");
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
    onChange: (e) => {
      updateData(e, data.id, "nameDrug");
      updateAvoid(e);
    }
  }), a2 ? /* @__PURE__ */ React.createElement(import_react14.Text, {
    color: "tomato"
  }, "Drug Food Intrection : ", a2) : null), /* @__PURE__ */ React.createElement(import_react14.Spacer, null), /* @__PURE__ */ React.createElement(import_react14.VStack, {
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
  return /* @__PURE__ */ import_react21.default.createElement(import_react20.Box, {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /* @__PURE__ */ import_react21.default.createElement(import_react20.VStack, null, /* @__PURE__ */ import_react21.default.createElement(import_react20.Heading, {
    style: { fontSize: "5em" }
  }, "Health"), /* @__PURE__ */ import_react21.default.createElement(import_react20.Heading, {
    style: { fontSize: "5em" }
  }, "equity"), /* @__PURE__ */ import_react21.default.createElement(import_react20.Heading, {
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
var assets_manifest_default = { "version": "74598f43", "entry": { "module": "/build/entry.client-IBURFPXU.js", "imports": ["/build/_shared/chunk-PYYGCPSQ.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-2QMDI7TR.js", "imports": ["/build/_shared/chunk-3YWBN7K6.js", "/build/_shared/chunk-JWGZYV6Q.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/Login": { "id": "routes/Login", "parentId": "root", "path": "Login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/Login-3XRH2FPQ.js", "imports": ["/build/_shared/chunk-I3CML6S4.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-NU6PWQBE.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/index": { "id": "routes/dashboard/index", "parentId": "routes/dashboard", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/dashboard/index-TP37TL4A.js", "imports": ["/build/_shared/chunk-3YWBN7K6.js", "/build/_shared/chunk-I3CML6S4.js", "/build/_shared/chunk-JWGZYV6Q.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-45GZ6LJB.js", "imports": ["/build/_shared/chunk-I3CML6S4.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-74598F43.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvb3QudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL05hdmJhci50c3giLCAiLi4vYXBwL2NvbnRleHQvbG9naW5EYXRhQ29udGV4dC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkLnRzeCIsICIuLi9hcHAvc2Vzc2lvbnMudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcZGFzaGJvYXJkXFxpbmRleC50c3giLCAiLi4vYXBwL2NvbnRleHQvcHJlc0NvbnRleHQudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0ZpbmRQYXRpZW50LnRzeCIsICIuLi9hcHAvdXRpbHMvZmlyZS5zZXJ2ZXIudHMiLCAicm91dGU6QzpcXFVzZXJzXFxydWRyYVxcRGVza3RvcFxcb1xcbGV0dGVyLmpzXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgInJvdXRlOkM6XFxVc2Vyc1xccnVkcmFcXERlc2t0b3BcXG9cXGxldHRlci5qc1xcYXBwXFxyb3V0ZXNcXExvZ2luLnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuMlxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XHJcbmltcG9ydCBtb3JnYW4gZnJvbSBcIm1vcmdhblwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL2V4cHJlc3NcIjtcclxuXHJcbmltcG9ydCAqIGFzIHNlcnZlckJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcblxyXG4vLyBodHRwOi8vZXhwcmVzc2pzLmNvbS9lbi9hZHZhbmNlZC9iZXN0LXByYWN0aWNlLXNlY3VyaXR5Lmh0bWwjYXQtYS1taW5pbXVtLWRpc2FibGUteC1wb3dlcmVkLWJ5LWhlYWRlclxyXG5hcHAuZGlzYWJsZShcIngtcG93ZXJlZC1ieVwiKTtcclxuXHJcbi8vIFJlbWl4IGZpbmdlcnByaW50cyBpdHMgYXNzZXRzIHNvIHdlIGNhbiBjYWNoZSBmb3JldmVyLlxyXG5hcHAudXNlKFxyXG4gIFwiL2J1aWxkXCIsXHJcbiAgZXhwcmVzcy5zdGF0aWMoXCJwdWJsaWMvYnVpbGRcIiwgeyBpbW11dGFibGU6IHRydWUsIG1heEFnZTogXCIxeVwiIH0pXHJcbik7XHJcblxyXG4vLyBFdmVyeXRoaW5nIGVsc2UgKGxpa2UgZmF2aWNvbi5pY28pIGlzIGNhY2hlZCBmb3IgYW4gaG91ci4gWW91IG1heSB3YW50IHRvIGJlXHJcbi8vIG1vcmUgYWdncmVzc2l2ZSB3aXRoIHRoaXMgY2FjaGluZy5cclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhcInB1YmxpYy9idWlsZFwiLCB7IG1heEFnZTogXCIxaFwiIH0pKTtcclxuXHJcbmFwcC51c2UobW9yZ2FuKFwidGlueVwiKSk7XHJcblxyXG5hcHAuYWxsKFxyXG4gIFwiKlwiLFxyXG4gIGNyZWF0ZVJlcXVlc3RIYW5kbGVyKHtcclxuICAgIGJ1aWxkOiBzZXJ2ZXJCdWlsZCxcclxuICAgIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WXHJcbiAgfSlcclxuKTtcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgRXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXHJ1ZHJhXFxcXERlc2t0b3BcXFxcb1xcXFxsZXR0ZXIuanNcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXGRhc2hib2FyZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXGRhc2hib2FyZFxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiQzpcXFxcVXNlcnNcXFxccnVkcmFcXFxcRGVza3RvcFxcXFxvXFxcXGxldHRlci5qc1xcXFxhcHBcXFxccm91dGVzXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxydWRyYVxcXFxEZXNrdG9wXFxcXG9cXFxcbGV0dGVyLmpzXFxcXGFwcFxcXFxyb3V0ZXNcXFxcTG9naW4udHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9kYXNoYm9hcmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Rhc2hib2FyZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJkYXNoYm9hcmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2Rhc2hib2FyZC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZGFzaGJvYXJkL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZGFzaGJvYXJkXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvTG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL0xvZ2luXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIkxvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdDogUmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcclxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXHJcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcclxuKSB7XHJcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICk7XHJcblxyXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xyXG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcclxuICB9KTtcclxufVxyXG4iLCAiaW1wb3J0IHtcclxuICBMaW5rcyxcclxuICBMaXZlUmVsb2FkLFxyXG4gIE1ldGEsXHJcbiAgT3V0bGV0LFxyXG4gIFNjcmlwdHMsXHJcbiAgICBcclxuICBTY3JvbGxSZXN0b3JhdGlvbixcclxufSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIsIENvbG9yTW9kZVNjcmlwdCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuLy8gMS4gaW1wb3J0IGBleHRlbmRUaGVtZWAgZnVuY3Rpb25cclxuaW1wb3J0IHsgZXh0ZW5kVGhlbWUsIHR5cGUgVGhlbWVDb25maWcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQsIExvZ2luQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9sb2dpbkRhdGFDb250ZXh0XCI7XHJcblxyXG4vLyAyLiBBZGQgeW91ciBjb2xvciBtb2RlIGNvbmZpZ1xyXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xyXG4gIGluaXRpYWxDb2xvck1vZGU6ICdkYXJrJyxcclxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IGZhbHNlLFxyXG59XHJcblxyXG4vLyAzLiBleHRlbmQgdGhlIHRoZW1lXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoeyBjb25maWcgfSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIk5ldyBSZW1peCBBcHBcIiB9O1xyXG59O1xyXG5cclxuY29uc3QgRG9jdW1lbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxib2R5PlxyXG4gICAgICAgPENvbG9yTW9kZVNjcmlwdCBpbml0aWFsQ29sb3JNb2RlPXtcImRhcmtcIn0gLz5cclxuICAgICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICA8TG9naW5Db250ZXh0UHJvdmlkZXI+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxyXG4gICAgICBcclxuICAgICAgICA8L0xvZ2luQ29udGV4dFByb3ZpZGVyPiAgICAgIFxyXG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgPC9ib2R5PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8aGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxEb2N1bWVudCAvPlxyXG4gICAgPC9odG1sPlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IEJveCwgSFN0YWNrLCBMaXN0SXRlbSwgVW5vcmRlcmVkTGlzdCwgV3JhcEl0ZW0gLFRleHQsIEJ1dHRvbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlbWl4J1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tICd+L2NvbnRleHQvbG9naW5EYXRhQ29udGV4dCdcclxuaW1wb3J0IHsgQXZhdGFyLCBBdmF0YXJCYWRnZSwgQXZhdGFyR3JvdXAgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIFBvcG92ZXIsXHJcbiAgUG9wb3ZlclRyaWdnZXIsXHJcbiAgUG9wb3ZlckNvbnRlbnQsXHJcbiAgUG9wb3ZlckhlYWRlcixcclxuICBQb3BvdmVyQm9keSxcclxuICBQb3BvdmVyRm9vdGVyLFxyXG4gIFBvcG92ZXJBcnJvdyxcclxuICBQb3BvdmVyQ2xvc2VCdXR0b24sXHJcbiAgUG9wb3ZlckFuY2hvcixcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgZSBmcm9tICdleHByZXNzJ1xyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcblxyXG4gIGNvbnN0IFtkLHNldERdID0gdXNlQ29udGV4dChMb2dpbkNvbnRleHQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8SFN0YWNrIHB5PVwiMVwiIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0gYmFja2dyb3VuZD17XCJncmVlbi41MDBcIn0+XHJcbiAgICAgICAgPFVub3JkZXJlZExpc3QgZGlzcGxheT17XCJmbGV4XCJ9PlxyXG4gICAgICAgICAgPExpc3RJdGVtIHA9XCIzXCIgY29sb3I9e1wid2hpdGVcIn0gIGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvXCI+TGFicyBcdUQ4M0RcdUREMkM8L0xpbms+PC9MaXN0SXRlbT5cclxuICAgICAgICAgIDxMaXN0SXRlbSBwPVwiM1wiIGNvbG9yPXtcIndoaXRlXCJ9IGxpc3RTdHlsZVR5cGU9e1wibm9uZVwifSA+PExpbmsgdG89XCIvZGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9MaW5rPjwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8TGlzdEl0ZW0gcD1cIjNcIiBjb2xvcj17XCJ3aGl0ZVwifSBsaXN0U3R5bGVUeXBlPXtcIm5vbmVcIn0gPjxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+PC9MaXN0SXRlbT5cclxuICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgPFVub3JkZXJlZExpc3QgZGlzcGxheT17XCJmbGV4XCJ9PlxyXG4gICAgICAgIDxQb3BvdmVyPlxyXG4gIDxQb3BvdmVyVHJpZ2dlcj5cclxuICA8V3JhcEl0ZW0+XHJcbiAgICA8SFN0YWNrIG1yPVwiM1wiIGp1c3RpZnlDb250ZW50PXtcImZsZXgtc3RhcnRcIn0gYWxpZ25JdGVtcz1cImJhc2VsaW5lXCI+XHJcbiAgICAgICAgIHtcclxuICAgICAgZC5lbWFpbCAhPSBcIlwiID8gPEF2YXRhciAgbmFtZT17ZC5kaXNwbGF5TmFtZX0gIC8+IDogbnVsbCBcclxuICAgIH1cclxuICAgIDxUZXh0PntkLmVtYWlsfTwvVGV4dD5cclxuICAgIDwvSFN0YWNrPlxyXG4gIDwvV3JhcEl0ZW0+XHJcbiAgICBcclxuICA8L1BvcG92ZXJUcmlnZ2VyPlxyXG4gIDxQb3BvdmVyQ29udGVudD5cclxuICAgIDxQb3BvdmVyQXJyb3cgLz5cclxuICAgIDxQb3BvdmVyQ2xvc2VCdXR0b24gLz5cclxuICAgIDxQb3BvdmVySGVhZGVyPkNvbmZpcm1hdGlvbiE8L1BvcG92ZXJIZWFkZXI+XHJcbiAgICA8UG9wb3ZlckJvZHk+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGhhdmUgdGhhdCBwYXJhY2V0YW1vbCA/PC9Qb3BvdmVyQm9keT5cclxuICA8L1BvcG92ZXJDb250ZW50PlxyXG48L1BvcG92ZXI+XHJcbiAgICAgIFxyXG4gICAgICAgIDwvVW5vcmRlcmVkTGlzdD5cclxuICAgIDwvSFN0YWNrPiAgXHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhciIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcclxuLy8gaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbkNvbnRleHRQcm92aWRlciA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgXHJcblxyXG4gIGNvbnN0IG1haW5EYXRhID0gW3tcclxuICAgICAgbmFtZURydWc6XCJwYXJhY2V0YW1vbFwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOlwic3lydXBcIixcclxuICAgICAgbWc6XCIxNlwiLFxyXG4gICAgICBkdXJhdGlvbiA6XCIxMDFcIixcclxuICB9LHtcclxuICAgICAgbmFtZURydWc6XCJ3YXJmYXJpblwiLFxyXG4gICAgICBkb3NhZ2VGb3JtOlwibG90aW9uXCIsXHJcbiAgICAgIG1nOlwiMTZcIixcclxuICAgICAgZHVyYXRpb24gOlwiMTExXCJcclxuICB9XVxyXG5cclxuLy8gICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShtYWluRGF0YSlcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgIGVtYWlsOlwiXCIsXHJcbiAgICAgIGRpc3BsYXlOYW1lOlwiXCJcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2dpbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tkYXRhLCBzZXREYXRhXX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvTG9naW5Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIERpdmlkZXIsXHJcbiAgSGVhZGluZyxcclxuICBIU3RhY2ssXHJcbiAgTGlzdEl0ZW0sXHJcbiAgVGV4dCxcclxuICBVbm9yZGVyZWRMaXN0LFxyXG4gIFZTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGpzb24sIExpbmssIExpbmtzLCBMb2FkZXJGdW5jdGlvbiwgT3V0bGV0LCByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbnNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOkxvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHtyZXF1ZXN0fSkgPT4ge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKFxyXG4gICAgcmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKVxyXG4gICk7XHJcbiAgaWYgKHNlc3Npb24uaGFzKFwidXNlclNlc3Npb25cIikpIHtcclxuICAgIC8vIFJlZGlyZWN0IHRvIHRoZSBob21lIHBhZ2UgaWYgdGhleSBhcmUgYWxyZWFkeSBzaWduZWQgaW4uXHJcbiAgICBcclxuICAgIHJldHVybiB7c2hvd1BhZ2U6dHJ1ZX1cclxuICB9XHJcbiAgcmV0dXJuIHtzaG93UGFnZTpmYWxzZX1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG5cclxuICBjb25zdCB7c2hvd1BhZ2V9ID0gdXNlTG9hZGVyRGF0YSgpIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIHsvKiB7XHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHNob3dQYWdlKVxyXG4gICAgfSAqL31cclxuICAgIHtcclxuICAgICAgdHJ1ZSA/ICA8UHJpdmF0ZVBhZ2UgLz4gOiA8Tm90U2lnbkluUGFnZSAvPlxyXG4gICAgfVxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IE5vdFNpZ25JblBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgICAgPEhlYWRpbmc+VXNlciBOb3QgTG9nZWQgaW48L0hlYWRpbmc+XHJcbiAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IFByaXZhdGVQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxDb250YWluZXIgbWF4Vz1cIm9udGFpbmVyLmxnXCI+XHJcbiAgICA8SGVhZGluZyBweT1cIjNcIj5SeCBMYWJzPC9IZWFkaW5nPlxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgICB7LyogPERpdmlkZXIgc2l6ZT17XCIzXCJ9IGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiBvcmllbnRhdGlvbj0ndmVydGljYWwnIC8+ICovfVxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICBcclxuICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsICJpbXBvcnQge2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlfSBmcm9tIFwicmVtaXhcIlxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7Z2V0U2Vzc2lvbixjb21taXRTZXNzaW9uLGRlc3Ryb3lTZXNzaW9ufSAgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XHJcbiAgICBjb29raWU6e1xyXG4gICAgICAgIG5hbWU6XCJfX3Nlc3Npb25cIlxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbiIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRGl2aWRlcixcclxuICBIZWFkaW5nLFxyXG4gIEhlYWRpbmdQcm9wcyxcclxuICBIU3RhY2ssXHJcbiAgSW5wdXQsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgT21pdENvbW1vblByb3BzLFxyXG4gIE9yZGVyZWRMaXN0LFxyXG4gIFNwYWNlcixcclxuICBUZXh0LFxyXG4gIFVub3JkZXJlZExpc3QsXHJcbiAgVlN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgU2xhdGVFZGl0b3IgZnJvbSBcIn4vY29tcG9uZW50cy9TbGF0ZUVkaXRvclwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBNZW51LFxyXG4gIE1lbnVCdXR0b24sXHJcbiAgTWVudUxpc3QsXHJcbiAgTWVudUl0ZW0sXHJcbiAgTWVudUl0ZW1PcHRpb24sXHJcbiAgTWVudUdyb3VwLFxyXG4gIE1lbnVPcHRpb25Hcm91cCxcclxuICBNZW51RGl2aWRlcixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIE51bWJlcklucHV0LFxyXG4gIE51bWJlcklucHV0RmllbGQsXHJcbiAgTnVtYmVySW5wdXRTdGVwcGVyLFxyXG4gIE51bWJlckluY3JlbWVudFN0ZXBwZXIsXHJcbiAgTnVtYmVyRGVjcmVtZW50U3RlcHBlcixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVEb3duLCBBaUZpbGxXYXJuaW5nIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5pbXBvcnQgeyBQaW5JbnB1dCwgUGluSW5wdXRGaWVsZCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByZXNDb250ZXh0LCBQcmVzQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIn4vY29udGV4dC9wcmVzQ29udGV4dFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBCcmVhZGNydW1iLFxyXG4gIEJyZWFkY3J1bWJJdGVtLFxyXG4gIEJyZWFkY3J1bWJMaW5rLFxyXG4gIEJyZWFkY3J1bWJTZXBhcmF0b3IsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IEZpbmRQYXRpZW50IGZyb20gXCJ+L2NvbXBvbmVudHMvRmluZFBhdGllbnRcIjtcclxuaW1wb3J0IE1hcEZpbmRlciBmcm9tIFwifi9jb21wb25lbnRzL01hcEZpbmRlclwiO1xyXG5pbXBvcnQge0JpQXJyb3dCYWNrfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIlxyXG5pbXBvcnQgeyBkcnVnRm9vZEludHJlY3QgfSBmcm9tIFwifi91dGlscy9kcnVnLnNlcnZlclwiO1xyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAvLyBjb25zdCBbZCxzZXREXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpXHJcblxyXG4gIC8vIGNvbnN0IGFkZE1haW5EYXRhID0gKGU6YW55KSA9PiB7XHJcbiAgLy8gY29uc3QgbyA9IHtcclxuICAvLyAgIG5hbWVEcnVnOiBcIlwiLFxyXG4gIC8vICAgZG9zYWdlRm9ybTogXCJcIixcclxuICAvLyAgIG1nOiBcIlwiLFxyXG4gIC8vICAgZHVyYXRpb246IFwiXCIsXHJcbiAgLy8gfVxyXG5cclxuICAvLyBsZXQgbGFzdCA9IGRcclxuXHJcbiAgLy8gbGFzdC5wdXNoKG8pXHJcblxyXG4gIC8vIHNldEQobGFzdClcclxuXHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBbc2hvd1BhZ2UsIHNldFNob3dQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFByZXNDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgPEJ1dHRvbiBteT1cIjNcIiBtYj1cIjNcIj5cclxuICAgICAgICAgIENyZWF0ZSBOZXd7XCIgXCJ9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgPEJyZWFkY3J1bWIgcHk9XCIzXCI+XHJcbiAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAgICA8QnJlYWRjcnVtYkxpbmsgY29sb3I9XCJncmVlblwiIG9uQ2xpY2s9eyhlKSA9PiBzZXRTaG93UGFnZSgwKX0+XHJcbiAgICAgICAgICAgICA8SFN0YWNrPiAgPEJpQXJyb3dCYWNrIC8+ICA8VGV4dD4gRmluZCBQYXRpZW50PC9UZXh0PjwvSFN0YWNrPlxyXG4gICAgICAgICAgICAgIDwvQnJlYWRjcnVtYkxpbms+XHJcbiAgICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XHJcbiAgICAgICAgICAgIHtzaG93UGFnZSA9PT0gMSA/IChcclxuICAgICAgICAgICAgICA8QnJlYWRjcnVtYkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYkxpbmsgaHJlZj1cIiNcIj5uYW1lIG9mIFBhdGllbnQ8L0JyZWFkY3J1bWJMaW5rPlxyXG4gICAgICAgICAgICAgIDwvQnJlYWRjcnVtYkl0ZW0+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9CcmVhZGNydW1iPlxyXG4gICAgICAgICAgey8qIDxNYXBGaW5kZXIgLz4gKi99XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAge3Nob3dQYWdlID09PSAxID8gKFxyXG4gICAgICAgICAgPFZTdGFjayBqdXN0aWZ5Q29udGVudD17XCJmbGV4LXN0YXJ0XCJ9IGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxIU3RhY2tcclxuICAgICAgICAgICAgICB3PVwiZnVsbFwiXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYmV0d2VlblwifVxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxWaWV3ZXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgPE9sZFByZXNjcmlwdGlvbnMgLz5cclxuICAgICAgICAgICAgPC9IU3RhY2s+XHJcbjxIU3RhY2sgIGp1c3RpZnlDb250ZW50PXtcInNwYWNlLWJldHdlZW5cIn0gYWxpZ25JdGVtcz1cImZsZXgtZW5kXCI+XHJcbiAgXHJcbjxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnByaW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByaW50XCIpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBcdUQ4M0RcdUREQThcdUZFMEZcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIHsvKiA8QnV0dG9uPlNlYXJjaCBOZWFyZXN0IFN0b3JlPC9CdXR0b24+ICovfVxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT17XCJncmVlblwifT5TYXZlIFByZXNjcmlwdGlvbiA8L0J1dHRvbj5cclxuPC9IU3RhY2s+XHJcbiAgICAgICAgICA8L1ZTdGFjaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEZpbmRQYXRpZW50IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9QcmVzQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgT2xkUHJlc2NyaXB0aW9ucyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFZTdGFjayBwbD1cIjlcIiBwdD1cIjNcIiBtcj1cIjE1XCIgYWxpZ25JdGVtcz17XCJmbGV4LXN0YXJ0XCJ9PlxyXG4gICAgICA8SGVhZGluZyBmb250U2l6ZT1cIjJ4bFwiPk9sZCBQcmVzY3JpcHRpb25zPC9IZWFkaW5nPlxyXG4gICAgICA8VW5vcmRlcmVkTGlzdD5cclxuICAgICAgICA8TGlzdEl0ZW0gbGlzdFN0eWxlVHlwZT1cIm5vbmVcIj5kYXRlIDE3LTE1LTg3PC9MaXN0SXRlbT5cclxuICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxyXG4gICAgPC9WU3RhY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFZpZXdlciA9ICgpID0+IHtcclxuICBjb25zdCBbZCwgc2V0RF0gPSB1c2VDb250ZXh0KFByZXNDb250ZXh0KTtcclxuICBjb25zdCBhZGRSb3cgPSAoZTogYW55KSA9PiB7XHJcbiAgICBsZXQgb2xkRGF0YSA9IFtdO1xyXG5cclxuICAgIGQubWFwKChvbGREOiBhbnkpID0+IHtcclxuICAgICAgb2xkRGF0YS5wdXNoKG9sZEQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgb2xkRGF0YS5wdXNoKHtcclxuICAgICAgbmFtZURydWc6IFwiXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06IFwiXCIsXHJcbiAgICAgIG1nOiBcIlwiLFxyXG4gICAgICBkdXJhdGlvbjogXCJcIixcclxuICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0RChvbGREYXRhKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveD5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8UHJlc0JveCAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZFJvdyhlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkICtcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJlc0JveCA9ICgpID0+IHtcclxuICBjb25zdCBbZCwgc2V0RF0gPSB1c2VDb250ZXh0KFByZXNDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIHsvKiA8UHJlc1N0YWNrIC8+XHJcbiAgICAgIDxQcmVzU3RhY2sgLz5cclxuICAgICAgPFByZXNTdGFjayAvPiAqL31cclxuPEhTdGFjaz5cclxuPC9IU3RhY2s+XHJcbiAgICAgIHtkLm1hcCgocjogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxQcmVzU3RhY2sgZGF0YT17cn0gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFByZXNTdGFjayA9ICh7IGRhdGEgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgW3ByZUNvbiwgc2V0UHJlQ29uXSA9IHVzZUNvbnRleHQoUHJlc0NvbnRleHQpO1xyXG5cclxuICBjb25zdCB1cGRhdGVEYXRhID0gKGU6IGFueSwgaWQ6IGFueSwgdHlwZTogYW55KSA9PiB7XHJcbiAgICBsZXQgb2xkRCA9IHByZUNvbjtcclxuICAgIGxldCBuZXdMaXN0OiBhbnkgPSBbXTtcclxuICAgIG9sZEQubWFwKChvbGRkOiBhbnkpID0+IHtcclxuICAgICAgaWYgKG9sZGQuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICBjYXNlIFwibmFtZURydWdcIjpcclxuICAgICAgICAgICAgbGV0IHRtcERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgbmFtZURydWc6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgIGRvc2FnZUZvcm06IG9sZGQuZG9zYWdlRm9ybSxcclxuICAgICAgICAgICAgICBtZzogb2xkZC5tZCxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogb2xkZC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICBpZDogb2xkZC5pZCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaCh0bXBEYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3NhZ2VGb3JtXCI6XHJcbiAgICAgICAgICAgICAgbGV0IHRtcERhdGFEb3NlID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZURydWc6IG9sZGQubmFtZURydWcsXHJcbiAgICAgICAgICAgICAgICBkb3NhZ2VGb3JtOiBlLFxyXG4gICAgICAgICAgICAgICAgbWc6IG9sZGQubWQsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogb2xkZC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIGlkOiBvbGRkLmlkLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgICAgICAgbmV3TGlzdC5wdXNoKHRtcERhdGFEb3NlKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xpc3QucHVzaChvbGRkKTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cobmV3TGlzdCxcIk5FVyBMSVNUXCIpO1xyXG4gICAgY29uc29sZS5sb2cob2xkRCxcIk9MRCBMSVNUXCIpO1xyXG4gICAgc2V0UHJlQ29uKG5ld0xpc3QpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZHJ1Z0Zvb2RJbnRyZWN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIGRydWc6XCJhc3BpcmluXCIsXHJcbiAgICAgICAgYXZvaWQ6XCJGZXZlckZldyxnaW5rZ28sZ3JlZW4gdGVhXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZHJ1ZzpcImxpdGhpdW1cIixcclxuICAgICAgICBhdm9pZDpcIlNpZ25pZmljYW50IGluY3JlYXNlIG9yIGRlY3JlYXNlIGluIHNvZGl1bSBpbnRha2VcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkcnVnOlwiZGlnb3hpblwiLFxyXG4gICAgICAgIGF2b2lkOlwiaGlnaC1maWJlciBmb29kIGFuZCBtZWFsc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBkcnVnOlwibGV2b2RvcGFcIixcclxuICAgICAgYXZvaWQ6XCJFeGNlc3MgcHJvdGluXCJcclxuICB9LFxyXG4gIHtcclxuICAgIGRydWdzOlwid2FyZmFyaW5cIixcclxuICAgIGF2b2lkOlwiVml0YW1pbiBLLXJpY2ggZm9vZHMgYW5kIHN1cHBsZW1lbnRzLEFzaWFuIGdpbnNlbmcgZmVjZXJmZXcsZmFybGljLGdpbmdlcixnaW5rZ28sU3QuSm9obidzIHdvcnQgLGdyZWVuIHRlYVwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBkcnVnczpcInRldHJhY3ljbGluZVwiLFxyXG4gICAgYXZvaWQ6XCJpcm9uLXJpY2ggZm9vZCBvciBzdXBwbGVtZW50cyxjYWxjaXVtXCJcclxuICB9XHJcbl1cclxuXHJcblxyXG4vLyBjb25zdCBkcnVnRHJ1Z0ludHJlY3Rpb24gPSBbXHJcbi8vICAge1xyXG4vLyAgICAgZHJ1ZzpbXCJmbHVveGV0aW5lXCIsXCJwaGVuZWx6aW5lXCJdLFxyXG4vLyAgICAgZHJ1ZzpbXCJkaWdveGluXCIsXCJxdWluaWRpbmVcIl0sXHJcbi8vICAgICBkcnVnOltcIndhcmZhcmluXCIsXCJkaWZsdW5pc2FsXCJdLFxyXG4vLyAgIH1cclxuLy8gXVxyXG5cclxuY29uc3QgW2Esc2V0QV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5jb25zdCB1cGRhdGVBdm9pZCA9IChlOmFueSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiQXZvdWlkIFVwZGF0ZVwiLGUudGFyZ2V0LnZhbHVlKTtcclxuICBcclxuICBkcnVnRm9vZEludHJlY3QubWFwKG8gPT4ge1xyXG4gICAgY29uc29sZS5sb2cobyxcIk1BUFwiKTtcclxuICAgIFxyXG4gICAgaWYoZS50YXJnZXQudmFsdWUgPT09IG8uZHJ1Zyl7XHJcbiAgICAgIHNldEEoby5hdm9pZClcclxuICAgICAgY29uc29sZS5sb2coYSxcIkFcIik7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH0pICBcclxufVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBweT1cIjNcIiB3PVwiZnVsbFwiIGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1hcm91bmRcIj5cclxuICAgICAgey8qIDxUZXh0IGNvbG9yPVwicmVkICBcIj48QWlGaWxsV2FybmluZyAvPjwvVGV4dD4gKi99XHJcbiAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkocHJlQ29uKX0gKi99XHJcbiAgICAgIDxWU3RhY2s+XHJcbiAgICAgICAgPFRleHQ+RHJ1ZzwvVGV4dD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG14PVwiMVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWUgb2YgRHJ1Z1wiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5uYW1lRHJ1Z31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3VwZGF0ZURhdGEoZSwgZGF0YS5pZCwgXCJuYW1lRHJ1Z1wiKTt1cGRhdGVBdm9pZChlKX19XHJcbiAgICAgICAgLz5cclxuICAgICAgIHtcclxuICAgICAgICAgYSA/IDxUZXh0IGNvbG9yPXtcInRvbWF0b1wifT5cclxuICAgICAgICAgRHJ1ZyBGb29kIEludHJlY3Rpb24gOiB7XHJcbiAgICAgICAgICAgYVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgPC9UZXh0PiA6IG51bGxcclxuICAgICAgIH1cclxuICAgICAgPC9WU3RhY2s+XHJcbiAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgPFZTdGFjayBteD1cIjJcIj5cclxuICAgICAgICA8VGV4dD4gRG9zYWdlIEZvcm08L1RleHQ+XHJcbiAgICAgICAgPE1lbnVcclxuICAgICAgICAgIFxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZW51QnV0dG9uXHJcbiAgICAgICAgICAgIHZhbHVlPXtkYXRhLmRvc2FnZUZvcm19XHJcbiAgICAgICAgICAgIGFzPXtCdXR0b259XHJcbiAgICAgICAgICAgIHJpZ2h0SWNvbj17PEFpT3V0bGluZURvd24gLz59XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkYXRhLmRvc2FnZUZvcm19XHJcbiAgICAgICAgICA8L01lbnVCdXR0b24+XHJcbiAgICAgICAgICA8TWVudUxpc3Q+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtlID0+IHVwZGF0ZURhdGEoXCJvaW50bWVudHNcIiwgZGF0YS5pZCwgXCJkb3NhZ2VGb3JtXCIpfT5PaW50bWVudHM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17ZSA9PiB1cGRhdGVEYXRhKFwic3lydXBcIiwgZGF0YS5pZCwgXCJkb3NhZ2VGb3JtXCIpfT5zeXJ1cDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtlID0+IHVwZGF0ZURhdGEoXCJ0YWJsZXRzXCIsIGRhdGEuaWQsIFwiZG9zYWdlRm9ybVwiKX0+VGFibGV0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2UgPT4gdXBkYXRlRGF0YShcInBvd2RlclwiLCBkYXRhLmlkLCBcImRvc2FnZUZvcm1cIil9PlBvd2RlcjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtlID0+IHVwZGF0ZURhdGEoXCJwaWxsc1wiLCBkYXRhLmlkLCBcImRvc2FnZUZvcm1cIil9PlBpbGxzPC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvTWVudUxpc3Q+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgICAgPFNwYWNlciAvPlxyXG4gICAgICA8VlN0YWNrIG14PVwiMlwiPlxyXG4gICAgICAgIDxUZXh0PkRvc2UgbWc8L1RleHQ+XHJcbiAgICAgICAgPE51bWJlcklucHV0XHJcbiAgICAgICAgICBteD1cIjNcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXsxNX1cclxuICAgICAgICAgIHZhbHVlPXtkYXRhLm1nfVxyXG4gICAgICAgICAgcHJlY2lzaW9uPXsyfVxyXG4gICAgICAgICAgc3RlcD17MC4yfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxOdW1iZXJJbnB1dEZpZWxkIC8+XHJcbiAgICAgICAgICA8TnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgICAgICA8TnVtYmVySW5jcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICA8TnVtYmVyRGVjcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgPC9OdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgPC9OdW1iZXJJbnB1dD5cclxuICAgICAgPC9WU3RhY2s+XHJcblxyXG4gICAgICB7LyogUGluIElucHV0ICovfVxyXG4gICAgICA8VlN0YWNrIG14PVwiMlwiPlxyXG4gICAgICAgIDxUZXh0PkR1cmF0aW9uPC9UZXh0PlxyXG4gICAgICAgIDxIU3RhY2s+XHJcbiAgICAgICAgICA8UGluSW5wdXQgZGVmYXVsdFZhbHVlPXtkYXRhLmR1cmF0aW9ufT5cclxuICAgICAgICAgICAgPFBpbklucHV0RmllbGQgLz5cclxuICAgICAgICAgICAgPFBpbklucHV0RmllbGQgLz5cclxuICAgICAgICAgICAgPFBpbklucHV0RmllbGQgLz5cclxuICAgICAgICAgIDwvUGluSW5wdXQ+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvVlN0YWNrPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55PihudWxsKTtcclxuLy8gaW1wb3J0IHV1aWQgZnJvbSBcInV1aWRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcmVzQ29udGV4dFByb3ZpZGVyID0gKHByb3BzOiBhbnkpID0+IHtcclxuICBcclxuXHJcbiAgY29uc3QgbWFpbkRhdGEgPSBbe1xyXG4gICAgICBuYW1lRHJ1ZzpcInBhcmFjZXRhbW9sXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06XCJzeXJ1cFwiLFxyXG4gICAgICBtZzpcIjE2XCIsXHJcbiAgICAgIGR1cmF0aW9uIDpcIjEwMVwiLFxyXG4gIH0se1xyXG4gICAgICBuYW1lRHJ1ZzpcIndhcmZhcmluXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06XCJsb3Rpb25cIixcclxuICAgICAgbWc6XCIxNlwiLFxyXG4gICAgICBkdXJhdGlvbiA6XCIxMTFcIlxyXG4gIH1dXHJcblxyXG4vLyAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG1haW5EYXRhKVxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgbmFtZURydWc6IFwiXCIsXHJcbiAgICAgIGRvc2FnZUZvcm06IFwiXCIsXHJcbiAgICAgIG1nOiBcIlwiLFxyXG4gICAgICBkdXJhdGlvbjogXCJcIixcclxuICAgICAgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbZGF0YSwgc2V0RGF0YV19PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1ByZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsICJpbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRm9ybUxhYmVsLFxyXG4gIFRhYixcclxuICBUYWJMaXN0LFxyXG4gIFRhYlBhbmVsLFxyXG4gIFRhYlBhbmVscyxcclxuICBUYWJzLFxyXG4gIFRleHQsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgRm9ybSwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBmaXJlQXV0aCwgZmlyZXN0b3JlIH0gZnJvbSBcIn4vdXRpbHMvZmlyZS5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgTG9naW5Db250ZXh0IH0gZnJvbSBcIn4vY29udGV4dC9sb2dpbkRhdGFDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKTtcclxuICBsZXQgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xyXG4gIGxldCBkb2NFbWFpbCA9IGZvcm0uZ2V0KFwiZG9jRW1haWxcIik7XHJcbiAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gIGNvbnNvbGUubG9nKFwiQ1JFQVRFIFBBVCAwMVwiKTtcclxuICBjb25zdCBjb2wgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInJ4cGF0XCIpO1xyXG4gIGNvbnN0IGxhYkNvbCA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwicnhMYWJzVXNlcnNcIik7XHJcbiAgbGV0IG1zZztcclxuICBzd2l0Y2ggKGZvcm1BY3Rpb24pIHtcclxuICAgIGNhc2UgXCJjcmVhdGVQYXRcIjpcclxuICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgUEFUXCIpO1xyXG5cclxuICAgICAgY29sXHJcbiAgICAgICAgLmdldCgpXHJcbiAgICAgICAgLnRoZW4oKHNuYXApID0+IHtcclxuICAgICAgICAgIHNuYXAuZm9yRWFjaCgobSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobS5kYXRhKCkuZW1haWwgPT09IGVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgLy8gbXNnID0geyBzdGF0dXM6IHRydWUsIGxvZ2luOnRydWUgLGRhdGE6bS5kYXRhKCl9O1xyXG5cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtLmRhdGEoKSwgXCJDUkVBVEUgUEFUIDAxXCIpO1xyXG5cclxuICAgICAgICAgICAgICBsYWJDb2wuZ2V0KCkudGhlbigoc25hcExhYnMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNuYXBMYWJzLmZvckVhY2goKHNsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChzbC5kYXRhKCkuZW1haWwgPT09IGRvY0VtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGxpc3Qgb2YgcGF0YXRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdE9mUGF0ID0gc2wuZGF0YSgpLnBhdExpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZExpc3QgPSBsaXN0T2ZQYXQucHVzaChlbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2wuZGF0YSgpLCBcIkRPQyBEQVRBXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmRvYygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAuc2V0KHsgb2xkTGlzdCwgLi4uc2wuZGF0YSgpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZWQgaW4gdGhlIGRhdGFiYXNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJFUlJPUiBEVVJJTkcgU0FWSU5HIElOIERBVEFCQVNFIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgbXNnID0geyBzdGF0dXM6IHRydWUsIGxvZ2luOiBmYWxzZSwgZGF0YTogZXJyIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhtc2cpO1xyXG5cclxuICByZXR1cm4gbXNnO1xyXG59O1xyXG5cclxuY29uc3QgRmluZFNhdmVkUGF0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHB0PVwiM1wiXHJcbiAgICAgIGJvcmRlcj17XCIzcHhcIn1cclxuICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMzB2d1wiLCBtaW5IZWlnaHQ6IFwiNDB2aFwiIH19XHJcbiAgICAgIHA9XCIzXCJcclxuICAgICAgbXQ9XCIzXCJcclxuICAgICAgdz1cIjYwXCJcclxuICAgID5cclxuICAgICAgPEZvcm1MYWJlbD5QYXRpZW50IElkPC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dCBtYj1cIjFcIiBteT1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJwYXRpZW50IGlkXCIgLz5cclxuXHJcbiAgICAgIDxGb3JtTGFiZWw+UGF0aWVudCBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dCBteT1cIjFcIiBtYj1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz5cclxuICAgICAgPEZvcm1MYWJlbD5QYXRpZW50IFBob25lTnVtYmVyPC9Gb3JtTGFiZWw+XHJcbiAgICAgIDxJbnB1dCBtYj1cIjFcIiBteT1cIjFcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIiAvPlxyXG5cclxuICAgICAgPEJ1dHRvbiBteT1cIjNcIj5TZWFyY2g8L0J1dHRvbj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDcmVhdGVOZXdQYXRpZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlLCBzZXRFXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkLCBzZXREXSA9IHVzZUNvbnRleHQoTG9naW5Db250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgcHQ9XCIzXCJcclxuICAgICAgYm9yZGVyPXtcIjNweFwifVxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogXCIzMHZ3XCIsIG1pbkhlaWdodDogXCI0MHZoXCIgfX1cclxuICAgICAgcD1cIjNcIlxyXG4gICAgICBtdD1cIjNcIlxyXG4gICAgICB3PVwiNjBcIlxyXG4gICAgPlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5QYXRpZW50IEVtYWlsIElkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBtYj1cIjFcIlxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBteT1cIjFcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHZhbHVlPXtlfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXRpZW50IEVtYWlsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dCB2YWx1ZT17ZC5lbWFpbH0gbmFtZT1cImRvY0VtYWlsXCIgLz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBtPVwiM1wiXHJcbiAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXHJcbiAgICAgICAgICB2YWx1ZT17XCJjcmVhdGVQYXRcIn1cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY29sb3JTY2hlbWU9e1wiZ3JlZW5cIn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBjcmVhdGUgUGF0aWVudFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgR2V0QWxsUGF0aWVudCA9ICgpID0+IHtcclxuICByZXR1cm4gPFRleHQ+R2V0IGFsbCBQYXRpZW50PC9UZXh0PjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEZpbmRQYXRpZW50KCkge1xyXG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKEFjdGlvbkRhdGEpO1xyXG5cclxuICAgIGlmIChBY3Rpb25EYXRhKSB7XHJcbiAgICAgIC8vIHNldEQoQWN0aW9uRGF0YS5kYXRhKVxyXG4gICAgfVxyXG4gIH0sIFtBY3Rpb25EYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjYwdndcIiB9fT5cclxuICAgICAgPFRhYnM+XHJcbiAgICAgICAgPFRhYkxpc3Q+XHJcbiAgICAgICAgICA8VGFiPkxvZ2luPC9UYWI+XHJcbiAgICAgICAgICA8VGFiPkNyZWF0ZSBOZXcgUGF0aWVudDwvVGFiPlxyXG4gICAgICAgICAgPFRhYj5HZXQgYWxsIFBhdGllbnQ8L1RhYj5cclxuICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgPFRhYlBhbmVscz5cclxuICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgPEZpbmRTYXZlZFBhdCAvPlxyXG4gICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgPENyZWF0ZU5ld1BhdGllbnQgLz5cclxuICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICA8VGFiUGFuZWw+XHJcbiAgICAgICAgICAgIDxHZXRBbGxQYXRpZW50IC8+XHJcbiAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgIDwvVGFiUGFuZWxzPlxyXG4gICAgICA8L1RhYnM+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG57XHJcbiAgLyogPEJveCBzdHlsZT17eyB3aWR0aDogXCI2MHZ3XCIgfX0+XHJcbjxUYWJzPlxyXG4gIDxUYWJMaXN0PlxyXG4gICAgPFRhYj5Mb2dpbjwvVGFiPlxyXG4gICAgPFRhYj5DcmVhdGUgTmV3IFVzZXI8L1RhYj5cclxuICA8L1RhYkxpc3Q+XHJcbiAgPFRhYlBhbmVscz5cclxuICAgIDxUYWJQYW5lbD5cclxuICAgICAgPExvZ2luVXNlciAvPlxyXG4gICAgPC9UYWJQYW5lbD5cclxuICAgIDxUYWJQYW5lbD5cclxuICAgICAgPENyZWF0ZU5ld1VzZXIgLz5cclxuICAgIDwvVGFiUGFuZWw+XHJcbiAgPC9UYWJQYW5lbHM+XHJcbjwvVGFicz5cclxuPC9Cb3g+ICovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbmRQYXRpZW50O1xyXG4iLCAiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgYXBwbGljYXRpb25EZWZhdWx0LCBjZXJ0IH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2FwcFwiO1xyXG5sZXQgYWRtaW4gPSByZXF1aXJlKFwiZmlyZWJhc2UtYWRtaW5cIilcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlLWFkbWluL2F1dGhcIjtcclxuXHJcblxyXG5cclxuY29uc3QgYTphbnkgPSB7XHJcbiAgXCJ0eXBlXCI6IFwic2VydmljZV9hY2NvdW50XCIsXHJcbiAgXCJwcm9qZWN0X2lkXCI6IFwicnVkaHJham9zaGljb21cIixcclxuICBcInByaXZhdGVfa2V5X2lkXCI6IFwiOWZlZjM2YjI3OWE0MTk0OGU2NjQzNDM0ZGY5NzMyMDgxYTViZDI5NVwiLFxyXG4gIFwicHJpdmF0ZV9rZXlcIjogXCItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUURCYVBiU0lJM1RpdnMrXFxuRDlpRWlPZW03ZVFjM25EcnVCVUQwTE0xUVEyYm1NQzNVUVlnV3lNaUgvdW5waE5zSTI3Y1Q4TXBVdjE3bnUzUlxcbjRKYnQyczUzWmVFRHNERXJLWlVIbkx6eGIrZTh6YjdsQVlPc016S2F0cVNOUHVPSGh3QjhhU1NKQXF3RkMxdXBcXG5XbituVTc3T1Z2bEhiYmhDUW8rd0dzeks5U2lzME1jak1ZWHF3dnR5MjVSNmwzd3Jrc1I5ZGVQbWZLSkpKVjA5XFxuOWhON25hc3Z1MEhtZzNnOVNVeUh3VlZhRFcwZy8zVVZBOXN5MkJkb1NkNWk4c2UxTCt5TlFuYytZaFZyWVlMU1xcbnBUZExLdlpOaCtnTHZGK0R1cXljaXkyS3FiRU12UzZTUlQyQXJtWWVHK3FRaGwrV1ZSd0xTQnNRQUY0d1FBZ0lcXG5udTczWjhKdEFnTUJBQUVDZ2dFQUdDSnkrbEdab1JZc3Q5ZmVXdHVDbksvKzBTTm96K0ZPcmdVeTk2aEFmSFFaXFxuU0ViU0R1T1FoTWVjN1pTcHc4ckFJTG5MVHJMT2NzaW9RSkpZQXlKVXRVMS9RS2lSMmlMOE45RDFPdU9OOVY5dlxcblBNQnRuK1Zib1RhOVhlckZGYnBnOHlWanE3MHJuZzJHeUtGRVlLcndtbXI3L0UvU3VHSDU4QzNIOUdPWFNja2tcXG5IdUs2alNvWWxhQ3V6VHp6clRYcFpxQTBDTHRLcTcrMEFZek5Xc3VWajNOb1JQTUt1U3RYM2Y1TmpWamxtYWtmXFxuT3hkTzRVeTlTZGszVUsxYzhNMjNXMnJKNlB4aUdVdE9SREFhMjN3bXJ2WC92MUg2ZnBJZ0k1bkNnVW5jTDZWNVxcbjc0cjNtWWIwZUZKTU94Wlk5ZUJYYTIzL3hnaEdTWU11alJreFF1bk1BUUtCZ1FEbWdoUHh5SDd6OGhhUWV2SEpcXG4zOEZ0Y1RSWDl1T0NyZWJ5R0hXdUlqTVUvcUV6N0hjQVRRUFNSUm8vTkpHNW5yUGpFUzY3M2xnMzBMbzNNNkVVXFxuclp6aDFEV0xqOGxSRUVncE1DajJxRUswWjBMQ29QcU1vekNjd1JabUxiNVpMa1BFdWJRZCsyN2JJY0crQjl0Ylxcbnh0eVdYaGlxSkVXMFFNNmxoYk5XNXc2WWdRS0JnUURXekpuTy9ONTlGbXhaeGM1Y3hSbXh6Nm8wY2RkL3JQTXNcXG5MKzUrUjR0Qm85U0J5ZHpsdnA4NU80S1owZU9KVzJURjZOVC9nYmF5MzByLzF2V2R6UFFqNndHY0haYjY1WXF1XFxudThSWDBGUVB0MnN3WlFHQU4vdGJ2dGtTWlZ3ZGFOaW0yeHNDdEsvY0phWVpWUy9kalBFQUJJcFBES2l2ZzVaeVxcbk40eXJxQk1UN1FLQmdRQ0pmQkpMUnV1NXNxNFV0TS9jT1pKVUpZNHozVFRycjYrc3ZEd01oYWQwSVQrakNhb2NcXG55dEs1cXEreC9UZmh2Ni9KZ21rZWNzcXBWOXlKcWtpc1hiVFIyVkdxa1ROaEgxWDdBeGVicnRaQ1pjaWk3NE1oXFxuT1FCNHJvNGVtYkFMM3hWYWsrekRhVUZBZ0V6ZmZDNHcrbFo5ZFZnK3V1MjhTbDgyeUowait5SndnUUtCZ0Z2Ylxcbkh5TlBLKzRlT3JPaFRZQ0tvVlJTMUJ5ZFdtUzFGMENjTnNjMTNTMXkzQnVzc1pSbUVqMHRYOHBiNFl3SjAyeDNcXG5CeTlFejFacSt1MnhoVk80SStlQVJpMzIwV3YxNFhxYnZYazRFOXFzdTEvMHNkR2RIeGE2NUtWalJ5TWtoUkhGXFxudlNWSkU3TjNQakt6SlViL1VNaUxLSUpwalhHUk9qTVo0a1ErR2ZwNUFvR0FSOHh0KytNb3pWT2I5dnRGMXVUTFxcbjIzRmxxSEJ1U3FuUk1xc2dpV3RSSUErOU0rMDN4UkRQSjh6TzBtSW1tUCt0cHlTNmpER2dHWkUyTWNxeC9wRS9cXG5JQ2FNVlBHanNYWWRicDI3MGMwazJmSDJaL3RWWEFnckhoekdnTUJnemljY1dINjdSbjhtZ2p4M1QyYXFsWGR0XFxuZ05NQU9SaUNJTytMUytjZXhZUllGTGs9XFxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxcblwiLFxyXG4gIFwiY2xpZW50X2VtYWlsXCI6IFwiZmlyZWJhc2UtYWRtaW5zZGsteHVkMThAcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIixcclxuICBcImNsaWVudF9pZFwiOiBcIjExMTA5NzMyMzc0NTc0MDUxNTk4OVwiLFxyXG4gIFwiYXV0aF91cmlcIjogXCJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aFwiLFxyXG4gIFwidG9rZW5fdXJpXCI6IFwiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW5cIixcclxuICBcImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybFwiOiBcImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0c1wiLFxyXG4gIFwiY2xpZW50X3g1MDlfY2VydF91cmxcIjogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2ZpcmViYXNlLWFkbWluc2RrLXh1ZDE4JTQwcnVkaHJham9zaGljb20uaWFtLmdzZXJ2aWNlYWNjb3VudC5jb21cIlxyXG59XHJcbmluaXRpYWxpemVBcHAoe2NyZWRlbnRpYWw6Y2VydChhKX0pO1xyXG5leHBvcnQgY29uc3QgZmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKCk7XHJcbmV4cG9ydCBjb25zdCBmaXJlQXV0aCA9IGdldEF1dGgoKTtcclxuXHJcblxyXG4iLCAiaW1wb3J0IHsgQm94LCBIZWFkaW5nLCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBjb2xsZWN0aW9uVXNlciA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcnNcIik7XHJcblxyXG4gIGxldCByZXMgPSBhd2FpdCBjb2xsZWN0aW9uVXNlclxyXG4gICAgLmRvYygpXHJcbiAgICAuc2V0KHsgZmlyc3Q6IFwiSmhzb25cIiwgbGFzdDogXCJEb2VcIiwgZW1haWw6IFwicnVkcmFAZ21pYWwuY29tXCIgfSk7XHJcblxyXG4gIHJldHVybiB7IG1zZzogXCJzYXZlZCBkYXRhXCIsIHJlcyB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgY29uc3QgcG9zdCA9IHVzZUxvYWRlckRhdGEoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggaGVpZ2h0PXtcIjEwMHZoXCJ9IGRpc3BsYXk9e1wiZmxleFwifSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PlxyXG4gICAgICA8VlN0YWNrPlxyXG4gICAgICA8SGVhZGluZyBzdHlsZT17e2ZvbnRTaXplOlwiNWVtXCJ9fT5IZWFsdGg8L0hlYWRpbmc+XHJcbiAgICAgIDxIZWFkaW5nIHN0eWxlPXt7Zm9udFNpemU6XCI1ZW1cIn19PmVxdWl0eTwvSGVhZGluZz5cclxuICAgICAgPEhlYWRpbmcgc3R5bGU9e3tmb250U2l6ZTpcIjVlbVwifX0+YWx3YXlzPC9IZWFkaW5nPlxyXG4gICAgICA8L1ZTdGFjaz5cclxuICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShwb3N0KX0gKi99XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwgImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRm9ybUhlbHBlclRleHQsXHJcbiAgRm9ybUxhYmVsLFxyXG4gIEhlYWRpbmcsXHJcbiAgSFN0YWNrLFxyXG4gIElucHV0LFxyXG4gIFNwYWNlcixcclxuICBUYWIsXHJcbiAgVGFiTGlzdCxcclxuICBUYWJQYW5lbCxcclxuICBUYWJQYW5lbHMsXHJcbiAgVGFicyxcclxuICB1c2VUb2FzdCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS1hZG1pbi9hdXRoXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uRnVuY3Rpb24sXHJcbiAgRm9ybSxcclxuICByZWRpcmVjdCxcclxuICB1c2VBY3Rpb25EYXRhLFxyXG4gIHVzZVN1Ym1pdCxcclxuICB1c2VUcmFuc2l0aW9uLFxyXG59IGZyb20gXCJyZW1peFwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbnRleHQgfSBmcm9tIFwifi9jb250ZXh0L2xvZ2luRGF0YUNvbnRleHRcIjtcclxuaW1wb3J0IHsgY3JlYXRlQW5kU2F2ZVNlc3Npb24gfSBmcm9tIFwifi9sb2dpYy9zZXNzaW9uQXV0cmhMb2dpY1wiO1xyXG5pbXBvcnQgeyBjb21taXRTZXNzaW9uIH0gZnJvbSBcIn4vc2Vzc2lvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9ybVRva2VuLCBjcmVhdGVVc2VyIH0gZnJvbSBcIn4vdXRpbHMvYXV0aC5zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZmlyZUF1dGgsIGZpcmVzdG9yZSB9IGZyb20gXCJ+L3V0aWxzL2ZpcmUuc2VydmVyXCI7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XHJcbi8vICAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuLy8gICBsZXQgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKTtcclxuLy8gICBsZXQgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xyXG4vLyAgIGxldCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XHJcbi8vICAgbGV0IHByb2ZpbGVOYW1lID0gZm9ybS5nZXQoXCJwcm9maWxlTmFtZVwiKTtcclxuXHJcbi8vICAgY29uc3QgY29sID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJ1c2Vyc1wiKTtcclxuLy8gICBsZXQgcmVzIDogYW55O1xyXG4vLyAgIGlmIChmb3JtQWN0aW9uID09PSBcImNyZWF0ZXVzZXJcIikge1xyXG4vLyAgICAgaWYgKGVtYWlsICYmIHBhc3N3b3JkICYmIHByb2ZpbGVOYW1lKSB7XHJcbi8vICAgICAgIGF3YWl0IGNyZWF0ZVVzZXIoe1xyXG4vLyAgICAgICAgIGVtYWlsLFxyXG4vLyAgICAgICAgIHBhc3N3b3JkLFxyXG4vLyAgICAgICAgIGRpc3BsYXlOYW1lOiBwcm9maWxlTmFtZSxcclxuLy8gICAgICAgfSkudGhlbihhc3luYyAodXNlclJlY29yZCkgPT4ge1xyXG4vLyAgICAgICAgIHJlcyA9IHsgc3RhdHVzOiB0cnVlLCBpZDogdXNlclJlY29yZC51aWQgfTtcclxuLy8gICAgICAgICBhd2FpdCBjcmVhdGVBbmRTYXZlU2Vzc2lvbih1c2VyUmVjb3JkLnVpZCxyZXF1ZXN0KVxyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIHJldHVybiByZXMuc3RhdHVzID8gcmVkaXJlY3QoXCIvZGFzaGJvYXJkXCIpIDogcmVzXHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfTogYW55KSA9PiB7XHJcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICBsZXQgZm9ybUFjdGlvbiA9IGZvcm0uZ2V0KFwiX2FjdGlvblwiKTtcclxuICBsZXQgZW1haWwgPSBmb3JtLmdldChcImVtYWlsXCIpO1xyXG4gIGxldCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XHJcbiAgbGV0IGRpc3BsYXlOYW1lID0gZm9ybS5nZXQoXCJwcm9maWxlTmFtZVwiKTtcclxuICBsZXQgY2VudGVyTmFtZSA9IGZvcm0uZ2V0KFwiY2VudGVyTmFtZVwiKTtcclxuXHJcbiAgY29uc3QgY29sID0gZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJyeExhYnNVc2Vyc1wiKTtcclxuXHJcbiAgbGV0IG1zZzogYW55ID0gXCJcIjtcclxuICBjb25zdCBjb2xsZWN0aW9uVXNlciA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwicnhMYWJzVXNlcnNcIik7XHJcbmxldCByZXM7XHJcblxyXG4gIHN3aXRjaCAoZm9ybUFjdGlvbikge1xyXG4gICAgY2FzZSBcImNyZWF0ZVVzZXJcIjpcclxuXHJcbiAgICAgICByZXMgPSBhd2FpdCBjb2xsZWN0aW9uVXNlclxyXG4gICAgICAgIC5kb2MoKVxyXG4gICAgICAgIC5zZXQoeyBlbWFpbCwgZGlzcGxheU5hbWUsIHBhc3N3b3JkIH0pO1xyXG4gICAgICBtc2cgPSB7IHN0YXR1czogdHJ1ZSwgcmVzIH07XHJcblxyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJsb2dpblVzZXJcIjpcclxuICAgICAgXHJcbiAgICByZXMgPSBhd2FpdCBjb2xsZWN0aW9uVXNlci5nZXQoKS50aGVuKHNuYXAgPT4ge1xyXG4gICAgICBzbmFwLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgaWYoZW1haWwgPT09IGQuZGF0YSgpLmVtYWlsICYmIHBhc3N3b3JkID09PSBkLmRhdGEoKS5wYXNzd29yZCl7XHJcbiAgICAgICAgICBtc2cgPSB7IHN0YXR1czogdHJ1ZSwgbG9naW46dHJ1ZSAsZGF0YTpkLmRhdGEoKX07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pXHJcblxyXG4gICAgICAvLyBsZXQgcmVzID0gYXdhaXQgY29sbGVjdGlvblVzZXIuZ2V0XHJcblxyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiBtc2cuc3RhdHVzID8gcmVkaXJlY3QoYC9kYXNoYm9hcmQ/ZW1haWw9JHt9YCkgOiBtc2c7XHJcbiAgcmV0dXJuIG1zZy5zdGF0dXMgPyAgbXNnIDogbnVsbDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XHJcbiAgY29uc3QgdG9hc3QgPSB1c2VUb2FzdCgpO1xyXG5jb25zdCBbZCxzZXREXSA9IHVzZUNvbnRleHQoTG9naW5Db250ZXh0KVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhBY3Rpb25EYXRhKTtcclxuICAgIFxyXG4gICAgaWYoQWN0aW9uRGF0YSl7XHJcbiAgICAgIHNldEQoQWN0aW9uRGF0YS5kYXRhKVxyXG4gICAgfVxyXG4gIH0sW0FjdGlvbkRhdGFdKVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgbWF4SD1cImNvbnRhaW5lci5sZ1wiPlxyXG4gICAgICBcclxuICAgIFxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT17XCJmbGV4XCJ9XHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxyXG4gICAgICAgIG10PVwiMzBcIlxyXG4gICAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiBcIjYwdndcIiB9fT5cclxuICAgICAgICAgIDxUYWJzPlxyXG4gICAgICAgICAgICA8VGFiTGlzdD5cclxuICAgICAgICAgICAgICA8VGFiPkxvZ2luPC9UYWI+XHJcbiAgICAgICAgICAgICAgPFRhYj5DcmVhdGUgTmV3IFVzZXI8L1RhYj5cclxuICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICA8VGFiUGFuZWxzPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxMb2dpblVzZXIgLz5cclxuICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxUYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVOZXdVc2VyIC8+XHJcbiAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgPC9UYWJQYW5lbHM+XHJcbiAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgTG9naW5Vc2VyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5DZW50ZXI8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgdHlwZT1cImNlbnRlclwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaWdpdGFsIExhYnNcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG5cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgey8qIEFsbCBPbGQgaW5wdXRzIERvd24qL31cclxuICAgICAgICA8Rm9ybUxhYmVsPkVtYWlsPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImpob25AZ21haWwuY29tXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUhlbHBlclRleHQ+V2UnbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbC48L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgID48L0lucHV0PlxyXG4gICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8SFN0YWNrIG10PVwiNlwiIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG5hbWU9XCJfYWN0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e1wibG9naW5Vc2VyXCJ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT17XCJncmVlblwifVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBDcmVhdGVOZXdVc2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IEFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5Qcm9maWxlIE5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwicHJvZmlsZU5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJKaG9uIERvZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1MYWJlbD5FbWFpbDwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJqaG9uQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0PldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICA+PC9JbnB1dD5cclxuICAgICAgICA8Rm9ybUxhYmVsPkNlbnRyZSBOYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbmFtZT1cImNlbnRlck5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJDZW50ZXIgTmFtZVwiXHJcbiAgICAgICAgPjwvSW5wdXQ+XHJcbiAgICAgICAgey8qIDxGb3JtTGFiZWw+TGljZW5jZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8vIG5hbWU9XCJsaWNlbmNlXCJcclxuICAgICAgICAgIC8vIHBsYWNlaG9sZGVyPVwiSmhvbiBEb2VcIlxyXG4gICAgICAgID48L0lucHV0PiAqL31cclxuICAgICAgICA8U3BhY2VyIC8+XHJcbiAgICAgICAgPEhTdGFjayBtdD1cIjZcIiBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBuYW1lPVwiX2FjdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtcImNyZWF0ZVVzZXJcIn1cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPXtcImdyZWVuXCJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENyZWF0ZSBQcm9maWxlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxTcGFjZXIgLz5cclxuICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIHByZXNjcmlwdGlvblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic3NDU5OGY0MycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtSUJVUkZQWFUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVBZWUdDUFNRLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC0yUU1ESTdUUi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstM1lXQk43SzYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KV0daWVY2US5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvTG9naW4nOnsnaWQnOidyb3V0ZXMvTG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonTG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvTG9naW4tM1hSSDJGUFEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUkzQ01MNlM0LmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Rhc2hib2FyZCc6eydpZCc6J3JvdXRlcy9kYXNoYm9hcmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZGFzaGJvYXJkJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Rhc2hib2FyZC1OVTZQV1FCRS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZGFzaGJvYXJkL2luZGV4Jzp7J2lkJzoncm91dGVzL2Rhc2hib2FyZC9pbmRleCcsJ3BhcmVudElkJzoncm91dGVzL2Rhc2hib2FyZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9kYXNoYm9hcmQvaW5kZXgtVFAzN1RMNEEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTNZV0JON0s2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSTNDTUw2UzQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KV0daWVY2US5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtNDVHWjZMSkIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUkzQ01MNlM0LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVz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
