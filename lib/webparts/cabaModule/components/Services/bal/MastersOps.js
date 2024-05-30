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
export default function MasterOps() {
    var _this = this;
    var spCrudOps = SPCRUDOPS();
    // const insertTravelData = async (props: IEximTravelBlockProps): Promise<IEximTravelProps[]> => {
    //     debugger;
    //     return await (await spCrudOps).insertData("TravelRequest",travelData,props).then();
    // }
    var getAgencyNames = function (props) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).getData("TravelAgencyMaster", "*,TravelAgency/Title,TravelAgency/ID", "TravelAgency", "", { column: 'Id', isAscending: false }, props).then(function (results) {
                        console.log(results);
                        var master = new Array();
                        results.map(function (item) {
                            master.push({
                                key: item.Id,
                                text: item.AgencyName,
                                obj: (item.TravelAgency == null ? null : item.TravelAgency)
                            });
                        });
                        return master;
                    })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getCities = function (props) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).getData("CityMaster", "*,CityGrade/Title,CityGrade/Id", "CityGrade", "", { column: 'Id', isAscending: false }, props).then(function (results) {
                        console.log(results);
                        var master = new Array();
                        results.map(function (item) {
                            master.push({
                                key: item.Id,
                                text: item.Title,
                                CityGrade: item.CityGrade,
                                CityGradeId: item.CityGrade !== undefined ? item.CityGrade.Id : '',
                            });
                        });
                        return master;
                    })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getBookingType = function (props) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).getData("BookingType", "*", "", "", { column: 'Id', isAscending: false }, props).then(function (results) {
                        console.log(results);
                        var master = new Array();
                        results.map(function (item) {
                            master.push({
                                key: item.Id,
                                text: item.Title
                            });
                        });
                        return master;
                    })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getTravelMode = function (props) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).getData("TravelModes", "*", "", "", { column: 'Id', isAscending: false }, props).then(function (results) {
                        console.log(results);
                        var master = new Array();
                        results.map(function (item) {
                            master.push({
                                key: item.Id,
                                text: item.Title
                            });
                        });
                        return master;
                    })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getTravelModeType = function (props) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).getData("TravelModeTypes", "*,TravelMode/Title", "TravelMode", "", { column: 'Id', isAscending: false }, props).then(function (results) {
                        console.log(results);
                        var master = new Array();
                        results.map(function (item) {
                            master.push({
                                key: item.Id,
                                text: item.Title,
                                Mode: item.TravelModeId,
                            });
                        });
                        return master;
                    })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getScale = function (props) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).getData("ScaleMaster", "*", "", "", { column: 'Id', isAscending: false }, props).then(function (results) {
                        console.log(results);
                        var scale = new Array();
                        results.sort(function (a, b) { return b.Id - a.Id; }).map(function (item) {
                            scale.push({
                                key: item.Id,
                                text: item.Title
                            });
                        });
                        return scale;
                    })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        getAgencyNames: getAgencyNames,
        getCities: getCities,
        getBookingType: getBookingType,
        getTravelMode: getTravelMode,
        getTravelModeType: getTravelModeType,
        getScale: getScale
    };
}

//# sourceMappingURL=MastersOps.js.map
