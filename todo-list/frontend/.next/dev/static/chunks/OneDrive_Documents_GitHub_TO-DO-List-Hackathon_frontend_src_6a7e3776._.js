(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/context/SearchContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Navbar() {
    _s();
    const { logout, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { searchQuery, setSearchQuery, clearSearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"])();
    const [localInput, setLocalInput] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(searchQuery);
    // Sync local input with global query if global query changes externally (e.g. clearSearch)
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "Navbar.useEffect": ()=>{
            if (searchQuery === '' && localInput !== '') {
                setLocalInput('');
            }
        }
    }["Navbar.useEffect"], [
        searchQuery
    ]);
    const handleLogout = ()=>{
        clearSearch();
        logout();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto flex h-16 items-center justify-between px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-2xl font-black tracking-tight",
                            children: [
                                "Hack",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary",
                                    children: "Do"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden max-w-md flex-1 px-8 md:flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search tasks...",
                                value: localInput,
                                onChange: (e)=>{
                                    setLocalInput(e.target.value);
                                    setSearchQuery(e.target.value);
                                },
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter') {
                                        e.currentTarget.blur();
                                        setLocalInput(''); // Clear visual input only
                                    }
                                },
                                className: "w-full rounded-full border border-border bg-muted/50 py-2 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 pl-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden text-right lg:block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold leading-none",
                                        children: user?.full_name || 'User'
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground mt-1",
                                        children: user?.email
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 p-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full w-full rounded-full bg-muted flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "h-6 w-6 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: "ml-2 rounded-lg p-2 text-muted-foreground hover:bg-rose-50 hover:text-rose-600 transition-colors dark:hover:bg-rose-900/20",
                                title: "Logout",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Navbar, "gycjMK8D1qK0OmGSBAYBYoTBds8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskCard",
    ()=>TaskCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
const priorityStyles = {
    low: "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
    medium: "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
    high: "bg-rose-50 text-rose-700 border-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20"
};
function TaskCard({ id, title, description, status, priority, due_date, tags = [], onEdit, onDelete, onStatusChange }) {
    const isCompleted = status === 'completed';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.95
        },
        whileHover: {
            y: -4
        },
        className: `group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5 ${isCompleted ? 'bg-muted/30 grayscale-[0.5]' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${priorityStyles[priority]}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-current"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            priority
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onEdit(id),
                                className: "rounded-lg p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (confirm('Delete task?')) onDelete(id);
                                },
                                className: "rounded-lg p-2 text-muted-foreground hover:bg-rose-500/10 hover:text-rose-600 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `mb-2 text-lg font-bold leading-tight ${isCompleted ? 'text-muted-foreground line-through' : 'text-foreground'}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm leading-relaxed ${isCompleted ? 'text-muted-foreground/70' : 'text-muted-foreground'} line-clamp-3`,
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-1.5",
                        children: tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-0.5 text-[10px] font-semibold text-secondary-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        className: "h-2.5 w-2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this),
                                    tag
                                ]
                            }, tag, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-t border-border pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs font-medium text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    due_date ? new Date(due_date).toLocaleDateString(undefined, {
                                        month: 'short',
                                        day: 'numeric'
                                    }) : 'No date'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onStatusChange(id, isCompleted ? 'pending' : 'completed'),
                                className: `flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${isCompleted ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5'}`,
                                children: [
                                    isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                        lineNumber: 98,
                                        columnNumber: 28
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                        lineNumber: 98,
                                        columnNumber: 71
                                    }, this),
                                    isCompleted ? 'Done' : 'Mark Done'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = TaskCard;
var _c;
__turbopack_context__.k.register(_c, "TaskCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaskForm",
    ()=>TaskForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/context/ToastContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function TaskForm({ initialData, onSubmit, onCancel, isLoading }) {
    _s();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.title || '');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.description || '');
    const [priority, setPriority] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.priority || 'medium');
    const [dueDate, setDueDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.due_date ? new Date(initialData.due_date).toISOString().slice(0, 16) : '');
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.tags || '');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!title.trim() || !description.trim() || !dueDate || !tags.trim()) {
            showToast("Please fill in all fields before creating the task.", "error");
            return;
        }
        onSubmit({
            title,
            description,
            priority,
            due_date: dueDate ? new Date(dueDate).toISOString() : null,
            tags: tags,
            status: initialData?.status || 'pending'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                scale: 0.9,
                y: 20
            },
            animate: {
                opacity: 1,
                scale: 1,
                y: 0
            },
            className: "w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-border bg-muted/30 px-6 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold text-foreground",
                                            children: initialData ? 'Update Task' : 'Create New Task'
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: "Keep your workspace organized and productive."
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onCancel,
                            className: "rounded-full p-2 text-muted-foreground hover:bg-muted transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                                    children: "Title"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: title,
                                    onChange: (e)=>setTitle(e.target.value),
                                    className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 placeholder:text-muted-foreground/50",
                                    placeholder: "What needs to be accomplished?"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    rows: 3,
                                    value: description,
                                    onChange: (e)=>setDescription(e.target.value),
                                    className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 placeholder:text-muted-foreground/50 resize-none",
                                    placeholder: "Provide some context for this task..."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                                            children: "Priority"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: priority,
                                                    onChange: (e)=>setPriority(e.target.value),
                                                    className: "w-full appearance-none rounded-xl border border-border bg-background pl-11 pr-4 py-3 text-sm font-bold outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "low",
                                                            children: "Low Priority"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "medium",
                                                            children: "Medium Priority"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "high",
                                                            children: "High Priority"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                            lineNumber: 98,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                                            children: "Deadline"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "datetime-local",
                                                    value: dueDate,
                                                    onChange: (e)=>setDueDate(e.target.value),
                                                    className: "w-full rounded-xl border border-border bg-background pl-11 pr-4 py-3 text-sm font-bold outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
                                    children: "Tags"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                            className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: tags,
                                            onChange: (e)=>setTags(e.target.value),
                                            className: "w-full rounded-xl border border-border bg-background pl-11 pr-4 py-3 text-sm font-medium outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5 placeholder:text-muted-foreground/50",
                                            placeholder: "work, urgent, finance..."
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 pt-4 border-t border-border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onCancel,
                                    className: "rounded-xl px-6 py-2.5 text-sm font-bold text-muted-foreground hover:bg-muted transition-colors",
                                    children: "Discard"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "flex items-center gap-2 rounded-xl bg-primary px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-50 transition-all hover:-translate-y-0.5",
                                    children: [
                                        isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                rotate: 360
                                            },
                                            transition: {
                                                repeat: Infinity,
                                                duration: 1,
                                                ease: "linear"
                                            },
                                            className: "h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this),
                                        initialData ? 'Save Changes' : 'Create Task'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(TaskForm, "Xx7pcWfpM7g4Bph06EWO2H1eRdU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = TaskForm;
var _c;
__turbopack_context__.k.register(_c, "TaskForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LandingPage",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function LandingPage() {
    _s();
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const tutorialSteps = [
        {
            title: "Create Your Account",
            description: "Sign up with your email to start your productivity journey. Your data is securely saved in our database.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "h-6 w-6"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2000"
        },
        {
            title: "Add Your First Task",
            description: "Fill in the title, description, and tags. Set a priority to focus on what matters most.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {
                className: "h-6 w-6"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            image: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=2000"
        },
        {
            title: "Categorize with Tags",
            description: "Use tags like 'Work' or 'Personal' to organize your life. Our sidebar helps you switch views instantly.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                className: "h-6 w-6"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80&w=2000"
        },
        {
            title: "Search & Filter",
            description: "Find any task instantly using our professional search bar. Filters help you see only what you need.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "h-6 w-6"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            image: "https://images.unsplash.com/photo-1454165833767-027ffea10c3b?auto=format&fit=crop&q=80&w=2000"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground selection:bg-primary/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto flex h-16 items-center justify-between px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-black tracking-tight",
                                    children: [
                                        "Hack",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "Do"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "text-sm font-bold text-muted-foreground hover:text-foreground transition-colors",
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signup",
                                    className: "rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-0.5",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-6 text-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest mb-6",
                                    children: "The Ultimate Task Manager"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mx-auto max-w-4xl text-5xl font-black tracking-tight sm:text-7xl leading-[1.1]",
                                    children: [
                                        "Organize your work ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                            lineNumber: 93,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-primary",
                                            children: "elevate your life."
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-8 max-w-2xl text-lg text-muted-foreground font-medium",
                                    children: "HackDo is the next-generation task tracker designed for creators. Stay focused, meet your deadlines, and achieve your goals with elegance."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/signup",
                                            className: "w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-primary px-10 py-5 text-lg font-black text-white shadow-2xl shadow-primary/30 hover:bg-primary/90 transition-all hover:-translate-y-1",
                                            children: [
                                                "Get Started Free",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>document.getElementById('tutorial')?.scrollIntoView({
                                                    behavior: 'smooth'
                                                }),
                                            className: "w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-10 py-5 text-lg font-bold hover:bg-muted transition-all",
                                            children: "How it works"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                            lineNumber: 105,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24 bg-muted/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-black tracking-tight sm:text-5xl",
                                    children: "Why choose HackDo?"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-muted-foreground font-medium",
                                    children: "Built for speed, privacy, and productivity."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-8 md:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        className: "h-8 w-8 text-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 123,
                                        columnNumber: 21
                                    }, void 0),
                                    title: "Lightning Fast",
                                    description: "Built with Next.js and FastAPI, HackDo feels instant. No more waiting for pages to load."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "h-8 w-8 text-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 128,
                                        columnNumber: 21
                                    }, void 0),
                                    title: "Secure & Private",
                                    description: "Your data is your own. We use enterprise-grade encryption to keep your tasks safe."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureCard, {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                        className: "h-8 w-8 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 133,
                                        columnNumber: 21
                                    }, void 0),
                                    title: "Beautiful UI",
                                    description: "A professional SaaS aesthetic that inspires you to get things done every single day."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "tutorial",
                className: "py-24 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row gap-16 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-primary font-black uppercase tracking-widest text-sm",
                                                children: "Step-by-Step Guide"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl font-black tracking-tight mt-2 sm:text-6xl",
                                                children: "What is HackDo?"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                lineNumber: 148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-4 text-lg text-muted-foreground font-medium",
                                                children: "HackDo is a professional productivity suite designed to help you organize your life. We use it to stay on top of deadlines, collaborate with teams, and clear mental clutter."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: tutorialSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setActiveStep(index),
                                                className: `flex w-full items-start gap-4 rounded-3xl p-6 text-left transition-all ${activeStep === index ? 'bg-card border border-border shadow-xl shadow-primary/5' : 'hover:bg-muted/50 opacity-60'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${activeStep === index ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`,
                                                        children: step.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "text-xl font-bold",
                                                                children: step.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 23
                                                            }, this),
                                                            activeStep === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                initial: {
                                                                    opacity: 0,
                                                                    height: 0
                                                                },
                                                                animate: {
                                                                    opacity: 1,
                                                                    height: 'auto'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-muted-foreground leading-relaxed mb-4",
                                                                        children: step.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    index === tutorialSteps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/login",
                                                                        className: "inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-black text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all",
                                                                        children: [
                                                                            "I'm Ready, Take me to Login",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                                                lineNumber: 184,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                                        lineNumber: 182,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9,
                                                x: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1,
                                                x: 0
                                            },
                                            exit: {
                                                opacity: 0,
                                                scale: 0.9,
                                                x: -20
                                            },
                                            className: "relative aspect-square w-full overflow-hidden rounded-[48px] border-8 border-card shadow-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: tutorialSteps[activeStep].image,
                                                    alt: tutorialSteps[activeStep].title,
                                                    className: "h-full w-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, activeStep, true, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-6 -right-6 h-32 w-32 bg-primary/10 rounded-full blur-3xl -z-10"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-10 -left-10 h-40 w-40 bg-indigo-500/10 rounded-full blur-3xl -z-10"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[48px] bg-primary p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1
                                },
                                viewport: {
                                    once: true
                                },
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-black tracking-tight sm:text-6xl",
                                        children: "Ready to boost your speed?"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mx-auto mt-8 max-w-xl text-lg font-bold opacity-80",
                                        children: "Join thousands of creators who use HackDo to manage their daily tasks and projects."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/signup",
                                                className: "w-full sm:w-auto rounded-2xl bg-white px-10 py-5 text-lg font-black text-primary shadow-xl transition-all hover:-translate-y-1 hover:bg-slate-50",
                                                children: "Create My Account"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/login",
                                                className: "w-full sm:w-auto rounded-2xl border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-bold backdrop-blur-sm transition-all hover:bg-white/20",
                                                children: "Already a member?"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                        lineNumber: 224,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-border py-12 bg-muted/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold",
                                    children: "HackDo"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground font-medium",
                            children: "© 2026 HackDo. All rights reserved. Created for productivity."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(LandingPage, "cJXWosTT0XUh3gGn3cCcv/Y+Hws=");
_c = LandingPage;
function FeatureCard({ icon, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group rounded-[32px] border border-border bg-card p-10 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-muted transition-all group-hover:bg-primary/10 group-hover:scale-110",
                children: icon
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-2xl font-black tracking-tight mb-4",
                children: title
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground font-medium leading-relaxed",
                children: description
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_c1 = FeatureCard;
function PlusIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ...props,
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 12h14"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 5v14"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx",
        lineNumber: 285,
        columnNumber: 7
    }, this);
}
_c2 = PlusIcon;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LandingPage");
__turbopack_context__.k.register(_c1, "FeatureCard");
__turbopack_context__.k.register(_c2, "PlusIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$components$2f$TaskCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$components$2f$TaskForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/TaskForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/context/SearchContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/context/ToastContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dashed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDashed$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/circle-dashed.js [app-client] (ecmascript) <export default as CircleDashed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/list-todo.js [app-client] (ecmascript) <export default as ListTodo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchX$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/search-x.js [app-client] (ecmascript) <export default as SearchX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$components$2f$LandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/components/LandingPage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Modal State
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditModal, setShowEditModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteModal, setShowDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [taskToDelete, setTaskToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingTask, setEditingTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formLoading, setFormLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isAuthenticated, isLoading: authLoading, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { searchQuery, clearSearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"])();
    const { showToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All Tasks');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!authLoading && isAuthenticated) {
                loadTasks();
            }
        }
    }["Home.useEffect"], [
        authLoading,
        isAuthenticated
    ]);
    const loadTasks = async ()=>{
        try {
            setLoading(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])('/tasks/');
            if (res.ok) {
                const data = await res.json();
                setTasks(data);
            } else if (res.status === 401) {
                logout();
            } else {
                const errData = await res.json().catch(()=>({}));
                console.error('Server error:', errData);
            }
        } catch (error) {
            console.error('Network or Connection error:', error);
            showToast(error.message || "Connection to server failed. Please check if the backend is running.", "error");
        } finally{
            setLoading(false);
        }
    };
    const handleCreateTask = async (data)=>{
        setFormLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])('/tasks/', {
                method: 'POST',
                body: JSON.stringify(data)
            });
            if (res.ok) {
                await loadTasks();
                setShowCreateModal(false);
                showToast("Task created successfully!", "success");
            }
        } catch (error) {
            console.error('Failed to create task', error);
            showToast("Failed to create task.", "error");
        } finally{
            setFormLoading(false);
        }
    };
    const handleEditTask = async (data)=>{
        if (!editingTask) return;
        setFormLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])(`/tasks/${editingTask.id}`, {
                method: 'PATCH',
                body: JSON.stringify(data)
            });
            if (res.ok) {
                await loadTasks();
                setShowEditModal(false);
                setEditingTask(null);
                showToast("Task updated successfully!", "success");
            }
        } catch (error) {
            console.error('Failed to update task', error);
            showToast("Failed to update task.", "error");
        } finally{
            setFormLoading(false);
        }
    };
    const handleDeleteTask = (id)=>{
        const task = tasks.find((t)=>t.id === id);
        if (task) {
            setTaskToDelete(task);
            setShowDeleteModal(true);
        }
    };
    const confirmDelete = async ()=>{
        if (!taskToDelete) return;
        setFormLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])(`/tasks/${taskToDelete.id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                setTasks((prev)=>prev.filter((t)=>t.id !== taskToDelete.id));
                setShowDeleteModal(false);
                setTaskToDelete(null);
                showToast("Task deleted successfully!", "delete");
            }
        } catch (error) {
            console.error('Failed to delete task', error);
            showToast("Failed to delete task.", "error");
        } finally{
            setFormLoading(false);
        }
    };
    const handleStatusChange = async (id, newStatus)=>{
        try {
            setTasks((prev)=>prev.map((t)=>t.id === id ? {
                        ...t,
                        status: newStatus
                    } : t));
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchWithAuth"])(`/tasks/${id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    status: newStatus
                })
            });
            if (res.ok) {
                showToast(newStatus === 'completed' ? "Task marked as done!" : "Task marked as pending.", "info");
            }
        } catch (error) {
            loadTasks();
            showToast("Failed to update status.", "error");
        }
    };
    const openEditModal = (id)=>{
        const task = tasks.find((t)=>t.id === id);
        if (task) {
            setEditingTask(task);
            setShowEditModal(true);
        }
    };
    const filteredTasks = tasks.filter((task)=>{
        // Filter by Search Query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matchesSearch = task.title.toLowerCase().includes(query) || task.description && task.description.toLowerCase().includes(query) || task.tags && task.tags.toLowerCase().includes(query);
            if (!matchesSearch) return false;
        }
        // Filter by Tab
        if (activeTab === 'All Tasks') return true;
        if (activeTab === 'Completed') return task.status === 'completed';
        if (activeTab === 'Important') return task.priority === 'high';
        if (activeTab === 'Planned') return !!task.due_date;
        if (activeTab === 'Work') return task.tags && task.tags.toLowerCase().includes('work');
        if (activeTab === 'Personal') return task.tags && task.tags.toLowerCase().includes('personal');
        return true;
    });
    const stats = {
        total: tasks.length,
        pending: tasks.filter((t)=>t.status !== 'completed').length,
        done: tasks.filter((t)=>t.status === 'completed').length
    };
    const handleTabChange = (tab)=>{
        setActiveTab(tab);
        if (searchQuery) clearSearch();
    };
    const getGreeting = ()=>{
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return "Good Morning";
        if (hour >= 12 && hour < 18) return "Good Afternoon";
        if (hour >= 18 && hour < 22) return "Good Evening";
        return "Good Night";
    };
    if (!authLoading && !isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$components$2f$LandingPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LandingPage"], {}, void 0, false, {
            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
            lineNumber: 207,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "fixed bottom-0 left-0 top-0 hidden w-72 border-r border-border bg-card lg:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-16 items-center px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold",
                                    children: "H"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold tracking-tight",
                                    children: [
                                        "HackDo ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded ml-1",
                                            children: "v2.0"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 217,
                                            columnNumber: 75
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                            lineNumber: 215,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2",
                                        children: "Main Menu"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 36
                                        }, void 0),
                                        label: "All Tasks",
                                        active: activeTab === 'All Tasks',
                                        onClick: ()=>handleTabChange('All Tasks'),
                                        count: stats.total
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 36
                                        }, void 0),
                                        label: "Planned",
                                        active: activeTab === 'Planned',
                                        onClick: ()=>handleTabChange('Planned')
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 36
                                        }, void 0),
                                        label: "Important",
                                        active: activeTab === 'Important',
                                        onClick: ()=>handleTabChange('Important')
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 36
                                        }, void 0),
                                        label: "Completed",
                                        active: activeTab === 'Completed',
                                        onClick: ()=>handleTabChange('Completed'),
                                        count: stats.done
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "px-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2",
                                        children: "Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 231,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 36
                                        }, void 0),
                                        label: "Work",
                                        active: activeTab === 'Work',
                                        onClick: ()=>handleTabChange('Work')
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarItem, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 233,
                                            columnNumber: 36
                                        }, void 0),
                                        label: "Personal",
                                        active: activeTab === 'Personal',
                                        onClick: ()=>handleTabChange('Personal')
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-6 right-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-primary p-6 text-white shadow-xl shadow-primary/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold opacity-80 uppercase tracking-widest mb-1",
                                    children: "Hackathon Mode"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-black leading-tight mb-3",
                                    children: "Productivity Boosted"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                    lineNumber: 240,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 w-full bg-white/20 rounded-full overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-white w-3/4 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] mt-2 opacity-70",
                                    children: "75% of daily goals achieved"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                            lineNumber: 238,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col lg:pl-72",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "container mx-auto px-6 py-10 max-w-7xl",
                        children: [
                            !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-4xl font-black tracking-tight text-foreground md:text-5xl",
                                                children: [
                                                    getGreeting(),
                                                    ", ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary",
                                                        children: "Creator."
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-lg text-muted-foreground",
                                                children: [
                                                    "You have ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-foreground",
                                                        children: [
                                                            stats.pending,
                                                            " tasks"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 26
                                                    }, this),
                                                    " remaining for today."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        initial: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        whileHover: {
                                            scale: 1.05
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        onClick: ()=>setShowCreateModal(true),
                                        className: "flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-black text-white shadow-2xl shadow-primary/30 transition-all hover:bg-primary/90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 15
                                            }, this),
                                            "Add New Task"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickStatCard, {
                                        label: "Progress",
                                        value: `${Math.round(stats.done / (stats.total || 1) * 100)}%`,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 119
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickStatCard, {
                                        label: "Tasks Done",
                                        value: stats.done,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "text-emerald-500"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 74
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickStatCard, {
                                        label: "Outstanding",
                                        value: stats.pending,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dashed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDashed$3e$__["CircleDashed"], {
                                            className: "text-rose-500"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 78
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            !searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8 flex gap-2 overflow-x-auto pb-2 lg:hidden",
                                children: [
                                    'All Tasks',
                                    'Planned',
                                    'Important',
                                    'Completed'
                                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleTabChange(f),
                                        className: `whitespace-nowrap rounded-full px-6 py-2 text-sm font-bold transition-all ${activeTab === f ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-card text-muted-foreground hover:bg-muted'}`,
                                        children: f
                                    }, f, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                    className: "h-5 w-5 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 23
                                                }, this),
                                                searchQuery ? "Search Results" : activeTab
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this),
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-96 w-full flex-col items-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                className: "h-12 w-12 animate-spin text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium text-muted-foreground animate-pulse",
                                                children: "Syncing your tasks..."
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layout: true,
                                        className: "grid gap-6 md:grid-cols-2 xl:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                mode: "popLayout",
                                                children: filteredTasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$components$2f$TaskCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskCard"], {
                                                        ...task,
                                                        tags: task.tags ? task.tags.split(',').map((t)=>t.trim()) : [],
                                                        priority: task.priority,
                                                        due_date: task.due_date,
                                                        onEdit: openEditModal,
                                                        onDelete: handleDeleteTask,
                                                        onStatusChange: handleStatusChange
                                                    }, task.id, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 29
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                layout: true,
                                                onClick: ()=>setShowCreateModal(true),
                                                className: "group flex min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-transparent transition-all hover:border-primary/50 hover:bg-primary/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground transition-all group-hover:bg-primary group-hover:text-white group-hover:rotate-90",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-6 w-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "mt-4 text-sm font-bold text-muted-foreground group-hover:text-primary",
                                                        children: "Create Task"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 345,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 17
                                    }, this),
                                    !loading && filteredTasks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-64 w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border bg-muted/20",
                                        children: searchQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchX$3e$__["SearchX"], {
                                                    className: "h-12 w-12 text-muted-foreground mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-bold text-muted-foreground",
                                                    children: "No tasks found"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground/60",
                                                    children: [
                                                        'Your search for "',
                                                        searchQuery,
                                                        "\" didn't return any results."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"], {
                                                    className: "h-12 w-12 text-muted-foreground mb-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                    lineNumber: 368,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-bold text-muted-foreground",
                                                    children: "All caught up!"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground/60",
                                                    children: "No tasks found in this category."
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                lineNumber: 311,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: [
                    (showCreateModal || showEditModal) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$components$2f$TaskForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskForm"], {
                        initialData: showEditModal ? editingTask : undefined,
                        onSubmit: showEditModal ? handleEditTask : handleCreateTask,
                        onCancel: ()=>{
                            setShowCreateModal(false);
                            setShowEditModal(false);
                            setEditingTask(null);
                        },
                        isLoading: formLoading
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                        lineNumber: 382,
                        columnNumber: 13
                    }, this),
                    showDeleteModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                onClick: ()=>setShowDeleteModal(false),
                                className: "absolute inset-0 bg-background/80 backdrop-blur-sm"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                lineNumber: 392,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.9,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.9,
                                    y: 20
                                },
                                className: "relative w-full max-w-md overflow-hidden rounded-[32px] border border-rose-500/20 bg-card p-8 shadow-2xl shadow-rose-500/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-rose-500/10 text-rose-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                    className: "h-10 w-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 406,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-black tracking-tight text-foreground",
                                                children: "Delete Confirmation"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 410,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-muted-foreground font-medium",
                                                children: [
                                                    "Are you sure you want to delete ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground font-bold",
                                                        children: [
                                                            '"',
                                                            taskToDelete?.title,
                                                            '"'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                        lineNumber: 414,
                                                        columnNumber: 61
                                                    }, this),
                                                    "? This action is permanent and cannot be reversed."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-10 flex w-full flex-col gap-3 sm:flex-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowDeleteModal(false),
                                                        className: "flex-1 rounded-2xl border border-border bg-background py-4 text-sm font-black transition-all hover:bg-muted",
                                                        children: "Nevermind"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: confirmDelete,
                                                        disabled: formLoading,
                                                        className: "flex-[1.5] flex items-center justify-center gap-2 rounded-2xl bg-rose-500 py-4 text-sm font-black text-white shadow-xl shadow-rose-500/20 transition-all hover:bg-rose-600 hover:-translate-y-1 disabled:opacity-50",
                                                        children: formLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "h-5 w-5 animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 37
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 41
                                                                }, this),
                                                                "Delete Forever"
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 405,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowDeleteModal(false),
                                        className: "absolute right-6 top-6 rounded-full p-2 text-muted-foreground hover:bg-muted",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                            lineNumber: 445,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                        lineNumber: 441,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                                lineNumber: 399,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                        lineNumber: 391,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s(Home, "MozGYRXudw5rNkznUQhpoHuLrEg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$SearchContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = Home;
function SidebarItem({ icon, label, active, onClick, count }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${active ? 'bg-primary/10 text-primary shadow-sm' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                        lineNumber: 467,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                lineNumber: 465,
                columnNumber: 13
            }, this),
            count !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `rounded-full px-2 py-0.5 text-[10px] ${active ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`,
                children: count
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                lineNumber: 470,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
        lineNumber: 457,
        columnNumber: 9
    }, this);
}
_c1 = SidebarItem;
function QuickStatCard({ label, value, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-muted",
                children: icon
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                lineNumber: 481,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-bold uppercase tracking-widest text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                lineNumber: 484,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documents$2f$GitHub$2f$TO$2d$DO$2d$List$2d$Hackathon$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-3xl font-black",
                children: value
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
                lineNumber: 485,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documents/GitHub/TO-DO-List-Hackathon/frontend/src/app/page.tsx",
        lineNumber: 480,
        columnNumber: 9
    }, this);
}
_c2 = QuickStatCard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Home");
__turbopack_context__.k.register(_c1, "SidebarItem");
__turbopack_context__.k.register(_c2, "QuickStatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Documents_GitHub_TO-DO-List-Hackathon_frontend_src_6a7e3776._.js.map