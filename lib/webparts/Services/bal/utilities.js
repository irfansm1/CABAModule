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
export default function Utilities() {
    var _this = this;
    var filterData = function (jsonData, filterValue, includeColumns) { return __awaiter(_this, void 0, void 0, function () {
        var lowercasedValue, filteredData;
        return __generator(this, function (_a) {
            lowercasedValue = filterValue.toLowerCase().trim();
            if (lowercasedValue === "")
                return [2 /*return*/, jsonData];
            else {
                filteredData = jsonData.filter(function (item) {
                    return Object.keys(item).some(function (key) {
                        return includeColumns.includes(key) ? item[key] !== undefined && item[key] !== null ? item[key].toString().toLowerCase().includes(lowercasedValue) : false : false;
                    });
                });
                return [2 /*return*/, filteredData];
            }
            return [2 /*return*/];
        });
    }); };
    var MonthColl = function () {
        var Years = new Array();
        var dateObj = new Date();
        for (var m = 0; m <= 11; m++) {
            var particularDate = new Date(dateObj.getFullYear(), m, 1);
            Years.push({
                Id: m + 1,
                Title: particularDate.toLocaleString('en-us', { month: 'long' }),
                ShortMonth: particularDate.toLocaleString('en-us', { month: 'short' }),
                NarrowMonth: particularDate.toLocaleString('en-us', { month: 'narrow' })
            });
        }
        return Years;
    };
    var hideShow = function (hideIt, ctx, loadingMessage) {
        if (hideIt) {
            ctx.statusRenderer.clearLoadingIndicator(document.getElementById('divBlockRequestsLoader'));
            document.getElementById('divBlockRequestsLoader').setAttribute("style", "height: 0px !important;");
        }
        else {
            document.getElementById('divBlockRequestsLoader').setAttribute("style", "height: 1100px !important;");
            ctx.statusRenderer.displayLoadingIndicator(document.getElementById('divBlockRequestsLoader'), loadingMessage, 1);
        }
    };
    // const sendEmail = async (to: string[], cc: string[], bcc: string[], subject: string, body: string
    //     , additionalHeaders: TypedHash<string>, props: IEximBankProps, from?: string) => {
    //     const emailProps: IEmailProperties = {
    //         To: to,
    //         CC: cc,
    //         BCC: bcc,
    //         Subject: subject,
    //         Body: body
    //     };
    //     if (from !== null && from !== undefined && from.trim() !== "") {
    //         emailProps.From = from;
    //     }
    //     if (additionalHeaders !== null && additionalHeaders !== undefined) {
    //         emailProps.AdditionalHeaders = additionalHeaders;
    //     }
    //     return await sp.utility.sendEmail(emailProps);
    // };
    return {
        filterData: filterData,
        MonthColl: MonthColl,
        hideShow: hideShow,
    };
}

//# sourceMappingURL=utilities.js.map
