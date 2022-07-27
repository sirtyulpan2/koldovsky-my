(function () {
    document.body.addEventListener('click', function (e) {
        if (e.target.id.toLowerCase() === 'questions_date_picker') bmlc(e.pageX, e.pageY, function (y, m, d) {
            const putDate = document.querySelector('.field_date');
           y !== undefined && m !== undefined && d !== undefined ? putDate.value = y + '-' + m + '-' + d : putDate.value = "" ;
        });
    });

    //bmlc_min(150, 150, function(y, m, d) { alert(y + '-' + m + '-' + d); });

    // minified by http://refresh-sf.com/, all default setting
    function bmlc_min(t, e, r, a, n) { var l = document, o = "ellab-bmlc", c = "1px solid #ccc"; if (!l.getElementById(o)) { var s = "${position:absolute;z-index:99999;border:|;box-shadow:5px 5px 9px 0 rgba(0,0,0,.5);}$ table{background:#fff;border-spacing:0;border-collapse:collapse;text-align:center;}$ tr td{border-left:|;border-top:|;padding:3px;}$ td:first-child{border-left:none;}$ tr:first-child td{border:none;}$ tr:nth-child(2){font-weight:bold;}$ tr:not(:first-child) td:first-child,$ tr:not(:first-child) td:last-child{color:red;}$ .o{color:#aaa;}$ tr:not(:first-child) td:first-child.o,$ tr:not(:first-child) td:last-child.o{color:#faa;}$ .t{background-color:#ffa;}$ [c]{cursor:pointer;}$ span[r]{background:#fff;padding:2px;}".replace(/\$/g, "." + o).replace(/\|/g, c), p = l.head || l.getElementsByTagName("head")[0], f = l.createElement("style"); l.getElementById(o) || (f.type = "text/css", f.setAttribute("id", o), f.styleSheet ? f.styleSheet.cssText = s : f.appendChild(l.createTextNode(s)), p.appendChild(f)) } var g = new Date, b = g.getFullYear(), h = g.getMonth(), u = g.getDate(); a ? (a = parseInt(a, 10), n = parseInt(n, 10)) : (a = b, n = h); var v = 0 == n ? 11 : n - 1, x = 0 == n ? a - 1 : a, $ = 11 == n ? 0 : n + 1, w = 11 == n ? a + 1 : a, I = [3, 1 == new Date(a, 1, 29).getMonth() ? 1 : 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3], E = new Date(a, n, 1).getDay(), A = function () { for (var t = "", e = 1900; 2100 >= e; e++)t += "<option" + (e == a ? ' selected="selected"' : "") + ">" + e + "</option>"; return t }(), C = '<tr><td colspan="2" y="' + x + '" nm=' + v + '" c>&laquo; ' + (v + 1) + '</td><td colspan="3"><select>' + A + '</select></td><td colspan="2" y="' + w + '" nm="' + $ + '" c>' + ($ + 1) + " &raquo;</td></tr>"; for (C += "<tr>", i = 0; i < 7; i++)C += "<td>" + "SMTWTFS"[i] + "</td>"; for (C += "</tr>", C += "<tr>", i = 0; i < E; i++) { var S = I[v] + 29 - E + i; C += '<td y="' + x + '" m="' + v + '" d="' + S + '" w="' + i + '" class="o" c>' + S + "</td>" } for (i = 1; i <= I[n] + 28; i++) { 0 == E && 1 != i && (C += "<tr>"); var T = a == b && n == h && i == u ? ' class="t"' : ""; C += '<td y="' + a + '" m="' + n + '" d="' + i + '" w="' + E + '"' + T + " c>" + i + "</td>", E = 6 == E ? 0 : E + 1, 0 == E && (C += "</tr>") } if (0 !== E) { for (i = E; i < 7; i++) { var k = i - E + 1; C += '<td y="' + w + '" m="' + $ + '" d="' + k + '" w="' + i + '" class="o" c>' + k + "</td>" } C += "</tr>" } C = '<div style="background:#fff;padding:4px;text-align:right;"> <span c r="r">[Reset]</span> <span c r="c">[Close]</span></div><table cellspacing="1">' + C + "</table>"; var D = l.createElement("div"), N = l.querySelector("." + o); return N && N.parentNode.removeChild(N), D.className = o, D.style.top = e + "px", D.style.left = t + "px", D.innerHTML = C, l.body.appendChild(D), D.addEventListener("click", function (a) { var i = a.target, n = i.getAttribute("r"); y = parseInt(i.getAttribute("y"), 10), m = parseInt(i.getAttribute("m"), 10), d = parseInt(i.getAttribute("d"), 10), nm = parseInt(i.getAttribute("nm"), 10), (d || nm >= 0 || n) && D.parentNode.removeChild(D), d ? r(y, m + 1, d) : nm >= 0 ? bmlc(t, e, r, y, nm) : "r" == n && r() }), D.querySelector("select").addEventListener("change", function (d) { bmlc(t, e, r, d.target.value, n) }), D }

    function bmlc(left, top, callback, year, month) {
        var _document = document, // minify
            prefix = 'ellab-bmlc',
            border = '1px solid #ccc';

        if (!_document.getElementById(prefix)) {
            // use $ as placeholder in css for two reason: 1. minify, 2. can change the prefix
            var css = '${position:absolute;z-index:99999;border:|;box-shadow:5px 5px 9px 0 rgba(0,0,0,.5);}$ table{background:#fff;border-spacing:0;border-collapse:collapse;text-align:center;}$ tr td{border-left:|;border-top:|;padding:3px;}$ td:first-child{border-left:none;}$ tr:first-child td{border:none;}$ tr:nth-child(2){font-weight:bold;}$ tr:not(:first-child) td:first-child,$ tr:not(:first-child) td:last-child{color:red;}$ .o{color:#aaa;}$ tr:not(:first-child) td:first-child.o,$ tr:not(:first-child) td:last-child.o{color:#faa;}$ .t{background-color:#ffa;}$ [c]{cursor:pointer;}$ span[r]{background:#fff;padding:2px;}'.replace(/\$/g, '.' + prefix).replace(/\|/g, border),
                head = _document.head || _document.getElementsByTagName('head')[0],
                style = _document.createElement('style');
            if (!_document.getElementById(prefix)) {
                style.type = 'text/css';
                style.setAttribute('id', prefix);
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }
                else {
                    style.appendChild(_document.createTextNode(css));
                }
                head.appendChild(style);
            }
        }

        var today = new Date(),
            todayYear = today.getFullYear(),
            todayMonth = today.getMonth(),
            todayDay = today.getDate();
        if (!year) {
            year = todayYear;
            month = todayMonth;
        }
        else {
            year = parseInt(year, 10);
            month = parseInt(month, 10);
        }

        // calc prev month, prev year etc
        var prevMonth = month == 0 ? 11 : month - 1,
            prevMonthYear = month == 0 ? year - 1 : year,
            nextMonth = month == 11 ? 0 : month + 1,
            nextMonthYear = month == 11 ? year + 1 : year,
            // calc the number of days in a month, offset by 28
            lastDayOfMonth = [3, new Date(year, 1, 29).getMonth() == 1 ? 1 : 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3],
            dow = new Date(year, month, 1).getDay(),
            yearSelect = (function () { var s = ''; for (var i = 1900; i <= 2100; i++) s += '<option' + (i == year ? ' selected="selected"' : '') + '>' + i + '</option>'; return s; })(),
            // the final html
            html = '<tr><td colspan="2" y="' + prevMonthYear + '" nm=' + prevMonth + '" c>&laquo; ' + (prevMonth + 1) + '</td><td colspan="3"><select>' + yearSelect + '</select></td><td colspan="2" y="' + nextMonthYear + '" nm="' + nextMonth + '" c>' + (nextMonth + 1) + ' &raquo;</td></tr>';

        // day of week header
        html += '<tr>';
        for (i = 0; i < 7; i++) {
            html += '<td>' + ('SMTWTFS'[i]) + '</td>';
        }
        html += '</tr>';

        // create cell for previous month
        html += '<tr>';
        for (i = 0; i < dow; i++) {
            var prevMonthDay = (lastDayOfMonth[prevMonth] + 29 - dow + i);
            html += '<td y="' + prevMonthYear + '" m="' + prevMonth + '" d="' + prevMonthDay + '" w="' + i + '" class="o" c>' + prevMonthDay + '</td>';
        }

        // loop the month
        for (i = 1; i <= lastDayOfMonth[month] + 28; i++) {
            // if first day is sun, the <tr> is already there, other case sun will create a new tr
            if (dow == 0 && i != 1) {
                html += '<tr>';
            }
            var clazz = year == todayYear && month == todayMonth && i == todayDay ? ' class="t"' : '';
            html += '<td y="' + year + '" m="' + month + '" d="' + i + '" w="' + dow + '"' + clazz + ' c>' + i + '</td>';
            dow = dow == 6 ? 0 : dow + 1;
            // next day is sat so close the <tr>
            if (dow == 0) {
                html += '</tr>';
            }
        }
        // if last day of month is sat, the table already closed, otherwise fill up the next month
        if (dow !== 0) {
            for (i = dow; i < 7; i++) {
                var nextMonthDay = i - dow + 1;
                html += '<td y="' + nextMonthYear + '" m="' + nextMonth + '" d="' + nextMonthDay + '" w="' + i + '" class="o" c>' + nextMonthDay + '</td>';
            }
            html += '</tr>';
        }

        // add span data-role='close', use short form for minify
        html = '<div style="background:#fff;padding:4px;text-align:right;"> <span c r="r">[Reset]</span> <span c r="c">[Close]</span></div><table cellspacing="1">' + html + '</table>';

        var div = _document.createElement('div'),
            existingDiv = _document.querySelector('.' + prefix);
        if (existingDiv) {
            existingDiv.parentNode.removeChild(existingDiv);
        }
        div.className = prefix;
        div.style.top = top + 'px';
        div.style.left = left + 'px';
        div.innerHTML = html;
        _document.body.appendChild(div);
        div.addEventListener('click', function (e) {
            var target = e.target,
                r = target.getAttribute('r');
            y = parseInt(target.getAttribute('y'), 10),
                m = parseInt(target.getAttribute('m'), 10),
                d = parseInt(target.getAttribute('d'), 10),
                nm = parseInt(target.getAttribute('nm'), 10);
            if (d || nm >= 0 || r) {
                // minify as all 4 cases will close
                div.parentNode.removeChild(div);
            }
            if (d) {
                callback(y, m + 1, d);
            }
            else if (nm >= 0) {
                bmlc(left, top, callback, y, nm);
            }
            else if (r == 'r') {
                // pass nothing to callback to indicate reset
                callback("");
            }
        });
        div.querySelector('select').addEventListener('change', function (e) {
            bmlc(left, top, callback, e.target.value, month);
        });

        return div;
    }
})();