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
import SPCRUDOPS from '../dal/spcrudops';
export default function SPCRUD() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var spCrudOps, getData, getRootData, insertData, batchInsert, updateData, currentUserInfo, getGroupUsers, deleteData;
        return __generator(this, function (_a) {
            spCrudOps = SPCRUDOPS();
            getData = function (listName, columnsToRetrieve, columnsToExpand, filters, orderby, props) { return __awaiter(_this, void 0, void 0, function () {
                var items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, spCrudOps];
                        case 1: return [4 /*yield*/, (_a.sent()).getData(listName, columnsToRetrieve, columnsToExpand, filters, orderby, props)];
                        case 2:
                            items = _a.sent();
                            return [2 /*return*/, items];
                    }
                });
            }); };
            getRootData = function (listName, columnsToRetrieve, columnsToExpand, filters, orderby, props) { return __awaiter(_this, void 0, void 0, function () {
                var items;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, spCrudOps];
                        case 1: return [4 /*yield*/, (_a.sent()).getData(listName, columnsToRetrieve, columnsToExpand, filters, orderby, props)];
                        case 2:
                            items = _a.sent();
                            return [2 /*return*/, items];
                    }
                });
            }); };
            insertData = function (listName, data, props) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, spCrudOps];
                        case 1: return [4 /*yield*/, (_a.sent()).insertData(listName, data, props)];
                        case 2:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            }); };
            batchInsert = function (listName, data, props) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, spCrudOps];
                        case 1: return [4 /*yield*/, (_a.sent()).batchInsert(listName, data, props)];
                        case 2:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            }); };
            updateData = function (listName, itemId, data, props) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, spCrudOps];
                        case 1: return [4 /*yield*/, (_a.sent()).updateData(listName, itemId, data, props)];
                        case 2:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            }); };
            currentUserInfo = function (props) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, spCrudOps];
                        case 1: return [4 /*yield*/, (_a.sent()).currentUserInfo(props)];
                        case 2:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            }); };
            getGroupUsers = function (groupId, props) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, spCrudOps];
                        case 1: return [4 /*yield*/, (_a.sent()).getGroupUsers(groupId, props)];
                        case 2:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            }); };
            deleteData = function (listName, itemId, props) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, spCrudOps];
                        case 1: return [4 /*yield*/, (_a.sent()).deleteData(listName, itemId, props)];
                        case 2:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            }); };
            // const getListInfo = async (listName: string, props: IVendorBlockReleaseDevProps) => {
            //     const list: any = await (await spCrudOps).getListInfo(listName, props);
            //     return list;
            // };
            // const batchUpdate = async (listName: string, data: any, props: IVendorBlockReleaseDevProps) => {
            //     const result: any = await (await spCrudOps).batchUpdate(listName, data, props);
            //     return result;
            // };
            // const batchDelete = async (listName: string, data: any, props: IVendorBlockReleaseDevProps) => {
            //     const result: any = await (await spCrudOps).batchDelete(listName, data, props);
            //     return result;
            // };
            // const uploadFile = async (folderServerRelativeUrl: string, file: File, props: IVendorBlockReleaseDevProps) => {
            //     const result: any = await (await spCrudOps).uploadFile(folderServerRelativeUrl, file, props);
            //     return result;
            // };
            // const deleteFile = async (fileServerRelativeUrl: string, props: IVendorBlockReleaseDevProps) => {
            //     const result: any = await (await spCrudOps).deleteFile(fileServerRelativeUrl, props);
            //     return result;
            // };
            return [2 /*return*/, {
                    getData: getData,
                    insertData: insertData,
                    getRootData: getRootData,
                    batchInsert: batchInsert,
                    updateData: updateData
                    //, currentProfile
                    ,
                    getGroupUsers: getGroupUsers,
                    currentUserInfo: currentUserInfo
                    //,batchUpdate
                    ,
                    deleteData: deleteData,
                }];
        });
    });
}

//# sourceMappingURL=spcrud.js.map
