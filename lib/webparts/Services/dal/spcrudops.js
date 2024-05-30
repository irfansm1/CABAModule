var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//import {  Web } from "@pnp/sp";
import { Web, sp } from 'sp-pnp-js';
export default function SPCRUDOPS() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var getData, getRootData, insertData, batchInsert, updateData, currentUserInfo, getGroupUsers, deleteData;
        return __generator(this, function (_a) {
            getData = function (listName, columnsToRetrieve, columnsToExpand, filters, orderby, props) { return __awaiter(_this, void 0, void 0, function () {
                var web, items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            web = new Web(props.currentSPContext.pageContext.web.absoluteUrl);
                            return [4 /*yield*/, web.lists.getByTitle(listName).items.select(columnsToRetrieve).expand(columnsToExpand).filter(filters).orderBy(orderby.column, orderby.isAscending).getAll()];
                        case 1:
                            items = _a.sent();
                            return [2 /*return*/, items];
                    }
                });
            }); };
            getRootData = function (listName, columnsToRetrieve, columnsToExpand, filters, orderby, props) { return __awaiter(_this, void 0, void 0, function () {
                var url, web, items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = window.location.origin;
                            web = new Web(url);
                            return [4 /*yield*/, web.lists.getByTitle(listName).items.select(columnsToRetrieve).expand(columnsToExpand).filter(filters).orderBy(orderby.column, orderby.isAscending).getAll()];
                        case 1:
                            items = _a.sent();
                            return [2 /*return*/, items];
                    }
                });
            }); };
            insertData = function (listName, data, props) { return __awaiter(_this, void 0, void 0, function () {
                var web;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            web = new Web(props.currentSPContext.pageContext.web.absoluteUrl);
                            return [4 /*yield*/, web.lists.getByTitle(listName).items.add(data).then(function (result) {
                                    return result;
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            batchInsert = function (listName, data, props) { return __awaiter(_this, void 0, void 0, function () {
                var web, list, entityTypeFullName, batch, d;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            web = new Web(props.currentSPContext.pageContext.web.absoluteUrl);
                            list = web.lists.getByTitle(listName);
                            return [4 /*yield*/, list.getListItemEntityTypeFullName()];
                        case 1:
                            entityTypeFullName = _a.sent();
                            batch = web.createBatch();
                            for (d = 0; d < data.length; d++) {
                                list.items.inBatch(batch).add(data[d], entityTypeFullName).then(function (b) {
                                    console.log(b);
                                });
                            }
                            return [4 /*yield*/, batch.execute()];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            updateData = function (listName, itemId, data, props) { return __awaiter(_this, void 0, void 0, function () {
                var web;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            web = new Web(props.currentSPContext.pageContext.web.absoluteUrl);
                            return [4 /*yield*/, web.lists.getByTitle(listName).items.getById(itemId).update(data).then(function (result) {
                                    return result;
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            currentUserInfo = function (props) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sp.web.currentUser.get().then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, getGroupUsers(response.Id, props).then(function (groupsresponse) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    response.ishr = groupsresponse.filter(function (x) { return x.Title == 'HR'; }).length > 0;
                                                    response.istraveldesk = groupsresponse.filter(function (x) { return x.Title == 'TravelDesk'; }).length > 0;
                                                    response.istraveladmin = groupsresponse.filter(function (x) { return x.Title == 'TICE_Admin'; }).length > 0;
                                                    return [2 /*return*/, response];
                                                });
                                            }); })];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            getGroupUsers = function (UserId, props) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, sp.web.siteUsers.getById(UserId).groups.get().then(function (groups) {
                                return groups;
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            deleteData = function (listName, itemId, props) { return __awaiter(_this, void 0, void 0, function () {
                var web;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            web = new Web(props.currentSPContext.pageContext.web.absoluteUrl);
                            return [4 /*yield*/, web.lists.getByTitle(listName).items.getById(itemId).delete().then(function (result) {
                                    return result;
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            }); };
            // const getListInfo = async (listName: string, props: IVendorBlockReleaseDevProps) => {
            //     let web = Web(props.currentSPContext.pageContext.web.absoluteUrl);
            //     const list = await web.lists.getByTitle(listName);
            //     const listInfo = await list.select("Id,Title")();
            //     return listInfo;
            // };
            // const batchUpdate = async (listName: string, data: any, props: IVendorBlockReleaseDevProps) => {
            //     let web = Web(props.currentSPContext.pageContext.web.absoluteUrl);
            //     let list = web.lists.getByTitle(listName);
            //     const entityTypeFullName = await list.getListItemEntityTypeFullName();
            //     let batch = web.createBatch();
            //     for (let d = 0; d < data.length; d++) {
            //         list.items.getById(data[d].Id).inBatch(batch).update(data[d], entityTypeFullName).then(b => {
            //             console.log(b);
            //         });
            //     }
            //     return await batch.execute();
            // };
            // const batchDelete = async (listName: string, data: any, props: IVendorBlockReleaseDevProps) => {
            //     let web = Web(props.currentSPContext.pageContext.web.absoluteUrl);
            //     let list = web.lists.getByTitle(listName);
            //     const entityTypeFullName = await list.getListItemEntityTypeFullName();
            //     let batch = web.createBatch();
            //     for (let d = 0; d < data.length; d++) {
            //         list.items.getById(data[d].Id).inBatch(batch).delete().then(b => {
            //             console.log(b);
            //         });
            //     }
            //     return await batch.execute();
            // };
            // const uploadFile = async (folderServerRelativeUrl: string, file: File, props: IVendorBlockReleaseDevProps) => {
            //     Logger.subscribe(new ConsoleListener());
            //     Logger.activeLogLevel = LogLevel.Verbose;
            //     let web = Web(props.currentSPContext.pageContext.web.absoluteUrl);
            //     var ticks = ((new Date().getTime() * 10000) + 621355968000000000);
            //     return await web.getFolderByServerRelativeUrl(folderServerRelativeUrl).files.addChunked(ticks.toString() + "_" + file.name, file, data => {
            //         Logger.log({ data: data, level: LogLevel.Verbose, message: "progress" });
            //     }, true);
            // };
            // const deleteFile = async (fileServerRelativeUrl: string, props: IVendorBlockReleaseDevProps) => {
            //     Logger.subscribe(new ConsoleListener());
            //     Logger.activeLogLevel = LogLevel.Verbose;
            //     let web = Web(props.currentSPContext.pageContext.web.absoluteUrl);
            //     return await web.getFileByServerRelativeUrl(fileServerRelativeUrl).delete().then(result => {
            //         return result;
            //     });
            // };
            return [2 /*return*/, {
                    getData: getData,
                    insertData: insertData,
                    getRootData: getRootData,
                    batchInsert: batchInsert,
                    updateData: updateData,
                    getGroupUsers: getGroupUsers
                    // ,currentProfile,
                    ,
                    currentUserInfo: currentUserInfo,
                    deleteData: deleteData,
                }];
        });
    });
}

//# sourceMappingURL=spcrudops.js.map
