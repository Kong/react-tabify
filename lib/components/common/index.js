'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StackedLI = exports.LI = exports.Link = exports.StackedLink = exports.StackedUL = exports.UL = exports.Flex = undefined;

var _glamorous = require('glamorous');

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = exports.Flex = _glamorous2.default.div({
    display: 'flex'
}, function (props) {
    var styles = [];
    if (props.column) styles.push({ flexDirection: 'column' });
    if (props.column) styles.push({ height: props.height });
    if (props.width) styles.push({ width: props.width });
    if (props.style) styles.push(props.style);
    return styles;
});

var UL = exports.UL = _glamorous2.default.ul({
    margin: 0,
    padding: 0,
    width: '100%',
    borderBottom: '1px solid #d8dde6'
});

var StackedUL = exports.StackedUL = _glamorous2.default.ul({
    margin: 0,
    padding: 0,
    minWidth: 200,
    width: '100%',
    borderRight: '1px solid #d8dde6'
}, function (props) {
    var styles = [];
    if (props.minWidth) {
        styles.push({ minWidth: props.minWidth });
    }
    return styles;
});

var StackedLink = exports.StackedLink = _glamorous2.default.a({
    fontSize: '.8125rem',
    cursor: 'pointer',
    display: 'inline-block',
    borderLeft: '4px solid white',
    padding: '0.75rem 1.5rem',
    ':focus': {
        textDecoration: 'underline'
    }
}, function (_ref) {
    var active = _ref.active;

    if (active) return [{ borderLeft: '4px solid #0070d2', color: '#0070d2' }];
});

var Link = exports.Link = _glamorous2.default.a({
    fontSize: '.8125rem',
    cursor: 'pointer',
    display: 'inline-block',
    height: '2.5rem',
    lineHeight: '2.5rem',
    padding: '0 .75rem',
    ':hover': {
        color: '#0070d2',
        borderBottom: '2px solid #0070d2'
    }
}, function (_ref2) {
    var active = _ref2.active;

    if (active) return [{ borderBottom: '2px solid #0070d2' }];
});

var LI = exports.LI = _glamorous2.default.li({
    display: 'inline'
});

var StackedLI = exports.StackedLI = _glamorous2.default.li({
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#f4f6f9'
    }
}, function (_ref3) {
    var active = _ref3.active;

    if (active) {
        return [{ width: '100%', backgroundColor: '#f0f8fc' }];
    }
});