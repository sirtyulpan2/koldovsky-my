(function () {
    document.body.addEventListener('click', function (e) {
        if (e.target.id.toLowerCase() === 'questions_date_picker') bmlc(e.pageX, e.pageY, function (y, m, d) {
            const putDate = document.querySelector('.field_date');
            y !== undefined && m !== undefined && d !== undefined ? putDate.value = y + '-' + m + '-' + d : putDate.value = "";
        });
    });

    function bmlc(left, top, callback, year, month) {
        let _document = document,
            prefix = 'index_questions_date',
            border = '1px solid #ccc';
        let today = new Date(),
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
        let prevMonth = month == 0 ? 11 : month - 1,
            prevMonthYear = month == 0 ? year - 1 : year,
            nextMonth = month == 11 ? 0 : month + 1,
            nextMonthYear = month == 11 ? year + 1 : year,
            lastDayOfMonth = [3, new Date(year, 1, 29).getMonth() == 1 ? 1 : 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3],
            dow = new Date(year, month, 1).getDay(),
            yearSelect = (function () { let s = ''; for (let i = 2022; i <= 2024; i++) s += '<option' + (i == year ? ' selected="selected"' : '') + '>' + i + '</option>'; return s; })(),
            html = '<tr><td colspan="2" y="' + prevMonthYear + '" nm=' + prevMonth + '" c>&laquo; ' + (prevMonth + 1) + '</td><td colspan="3"><select class="questions_date_select">' + yearSelect + '</select></td><td colspan="2" y="' + nextMonthYear + '" nm="' + nextMonth + '" c>' + (nextMonth + 1) + ' &raquo;</td></tr>';
        html += '<tr>';
        for (i = 0; i < 7; i++) {
            html += '<td>' + ('SMTWTFS'[i]) + '</td>';
        }
        html += '</tr>';
        html += '<tr>';
        for (i = 0; i < dow; i++) {
            let prevMonthDay = (lastDayOfMonth[prevMonth] + 29 - dow + i);
            html += '<td y="' + prevMonthYear + '" m="' + prevMonth + '" d="' + prevMonthDay + '" w="' + i + '" class="o" c>' + prevMonthDay + '</td>';
        }
        for (i = 1; i <= lastDayOfMonth[month] + 28; i++) {
            if (dow == 0 && i != 1) {
                html += '<tr>';
            }
            let clazz = year == todayYear && month == todayMonth && i == todayDay ? ' class="t"' : '';
            html += '<td y="' + year + '" m="' + month + '" d="' + i + '" w="' + dow + '"' + clazz + ' c>' + i + '</td>';
            dow = dow == 6 ? 0 : dow + 1;
            if (dow == 0) {
                html += '</tr>';
            }
        }
        if (dow !== 0) {
            for (i = dow; i < 7; i++) {
                let nextMonthDay = i - dow + 1;
                html += '<td y="' + nextMonthYear + '" m="' + nextMonth + '" d="' + nextMonthDay + '" w="' + i + '" class="o" c>' + nextMonthDay + '</td>';
            }
            html += '</tr>';
        }
        html = '<div style="background:#fff;padding:4px;text-align:right;"> <span c r="r">[Reset]</span> <span c r="c">[Close]</span></div><table cellspacing="1">' + html + '</table>';
        let div = _document.createElement('div'),
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
            let target = e.target,
                r = target.getAttribute('r');
            y = parseInt(target.getAttribute('y'), 10),
                m = parseInt(target.getAttribute('m'), 10),
                d = parseInt(target.getAttribute('d'), 10),
                nm = parseInt(target.getAttribute('nm'), 10);
            if (d || nm >= 0 || r) {
                div.parentNode.removeChild(div);
            }
            if (d) {
                callback(y, m + 1, d);
            }
            else if (nm >= 0) {
                bmlc(left, top, callback, y, nm);
            }
            else if (r == 'r') {
                callback("");
            }
        });
        div.querySelector('select').addEventListener('change', function (e) {
            bmlc(left, top, callback, e.target.value, month);
        });
        return div;
    }
})();