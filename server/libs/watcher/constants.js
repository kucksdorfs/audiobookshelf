"use strict";
/* IMPORT */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RENAME_TIMEOUT = exports.POLLING_TIMEOUT = exports.POLLING_INTERVAL = exports.PLATFORM = exports.IS_WINDOWS = exports.IS_MAC = exports.IS_LINUX = exports.HAS_NATIVE_RECURSION = exports.DEPTH = exports.DEBOUNCE = void 0;
const os_1 = __importDefault(require("os"));
/* CONSTANTS */
const DEBOUNCE = 300;
exports.DEBOUNCE = DEBOUNCE;
const DEPTH = 20;
exports.DEPTH = DEPTH;
const PLATFORM = os_1.default.platform();
exports.PLATFORM = PLATFORM;
const IS_LINUX = (PLATFORM === 'linux');
exports.IS_LINUX = IS_LINUX;
const IS_MAC = (PLATFORM === 'darwin');
exports.IS_MAC = IS_MAC;
const IS_WINDOWS = (PLATFORM === 'win32');
exports.IS_WINDOWS = IS_WINDOWS;
const HAS_NATIVE_RECURSION = IS_MAC || IS_WINDOWS;
exports.HAS_NATIVE_RECURSION = HAS_NATIVE_RECURSION;
const POLLING_INTERVAL = 3000;
exports.POLLING_INTERVAL = POLLING_INTERVAL;
const POLLING_TIMEOUT = 20000;
exports.POLLING_TIMEOUT = POLLING_TIMEOUT;
const RENAME_TIMEOUT = 1250;
exports.RENAME_TIMEOUT = RENAME_TIMEOUT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsWUFBWTs7Ozs7O0FBRVosNENBQW9CO0FBRXBCLGVBQWU7QUFFZixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFzQmIsNEJBQVE7QUFwQmhCLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztBQW9CQyxzQkFBSztBQWxCdkIsTUFBTSxRQUFRLEdBQUcsWUFBRSxDQUFDLFFBQVEsRUFBRyxDQUFDO0FBa0I2Qyw0QkFBUTtBQWhCckYsTUFBTSxRQUFRLEdBQUcsQ0FBRSxRQUFRLEtBQUssT0FBTyxDQUFFLENBQUM7QUFnQkssNEJBQVE7QUFkdkQsTUFBTSxNQUFNLEdBQUcsQ0FBRSxRQUFRLEtBQUssUUFBUSxDQUFFLENBQUM7QUFjZ0Isd0JBQU07QUFaL0QsTUFBTSxVQUFVLEdBQUcsQ0FBRSxRQUFRLEtBQUssT0FBTyxDQUFFLENBQUM7QUFZcUIsZ0NBQVU7QUFWM0UsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLElBQUksVUFBVSxDQUFDO0FBVXpCLG9EQUFvQjtBQVI3QyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQVF5RCw0Q0FBZ0I7QUFOdkcsTUFBTSxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBTTJFLDBDQUFlO0FBSnhILE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQztBQUk4Rix3Q0FBYyJ9