(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [15],
  {
    CYej: function(e, t, l) {
      'use strict';
      l.r(t);
      var a = l('0Owb'),
        n = l('q1tI'),
        c = l.n(n),
        r = (l('B2uJ'), l('+su7'), l('qOys'), l('5Yjd')),
        d = l.n(r),
        u = c.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            a = l('/7QA'),
            n = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(
                  a.Switch,
                  { defaultChecked: !0 },
                  'Switch',
                ),
                t['default'].createElement(a.Switch, {
                  defaultChecked: !0,
                  color: 'rgb(220, 0, 78)',
                }),
                t['default'].createElement(a.Switch, {
                  defaultChecked: !0,
                  color: '#43a047',
                }),
              );
            };
          return t['default'].createElement(n);
        }),
        i = c.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            a = l('/7QA'),
            n = function() {
              return t['default'].createElement(a.Switch, { disabled: !0 });
            };
          return t['default'].createElement(n);
        }),
        m = c.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            a = l('/7QA'),
            n = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(a.Switch, { size: 'default' }),
                t['default'].createElement(a.Switch, { size: 'small' }),
              );
            };
          return t['default'].createElement(n);
        }),
        E = c.a.memo(function() {
          var e = l('K+nK'),
            t = e(l('q1tI')),
            a = l('/7QA'),
            n = l('33Fu'),
            c = function() {
              return t['default'].createElement(
                'div',
                null,
                t['default'].createElement(a.Switch, {
                  checkedChildren: '\u5f00\u542f',
                  unCheckedChildren: '\u5173\u95ed',
                  defaultChecked: !0,
                }),
                t['default'].createElement('br', null),
                t['default'].createElement(a.Switch, {
                  checkedChildren: '1',
                  unCheckedChildren: '0',
                }),
                t['default'].createElement('br', null),
                t['default'].createElement(a.Switch, {
                  checkedChildren: t['default'].createElement(
                    n.AiOutlineCheck,
                    null,
                  ),
                  unCheckedChildren: t['default'].createElement(
                    n.AiOutlineClose,
                    null,
                  ),
                  defaultChecked: !0,
                }),
              );
            };
          return t['default'].createElement(c);
        });
      t['default'] = function() {
        return c.a.createElement(
          c.a.Fragment,
          null,
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h2',
              { id: 'switch-\u5f00\u5173' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#switch-\u5f00\u5173' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Switch \u5f00\u5173',
            ),
            c.a.createElement('hr', null),
            c.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u7528\u6cd5' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
          ),
          c.a.createElement(
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Switch } from \'faz-ui\';\n\nexport default () =>\n  <div>\n    <Switch defaultChecked>Switch</Switch>\n    <Switch defaultChecked color="rgb(220, 0, 78)" />\n    <Switch defaultChecked color="#43a047" />\n  </div>',
                },
              },
              {
                title: 'Basic Switch',
                desc:
                  '<div class="markdown"><p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            c.a.createElement(u, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: '\u7981\u7528\u72b6\u6001' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u7981\u7528\u72b6\u6001' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u7981\u7528\u72b6\u6001',
            ),
          ),
          c.a.createElement(
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Switch } from 'faz-ui';\n\nexport default () => <Switch disabled/>",
                },
              },
              {
                title: 'Disabled',
                desc:
                  '<div class="markdown"><p>Switch \u5931\u6548\u72b6\u6001\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            c.a.createElement(i, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: '\u4e24\u79cd\u5927\u5c0f' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u4e24\u79cd\u5927\u5c0f' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u4e24\u79cd\u5927\u5c0f',
            ),
          ),
          c.a.createElement(
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Switch } from \'faz-ui\';\n\nexport default () =>\n  <div>\n    <Switch size="default"/>\n    <Switch size="small"/>\n  </div>',
                },
              },
              {
                title: 'Size',
                desc:
                  '<div class="markdown"><p>\u53ef\u9009 <code>default</code> \u548c <code>small</code>\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            c.a.createElement(m, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h3',
              { id: '\u6587\u5b57\u548c\u56fe\u6807' },
              c.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u6587\u5b57\u548c\u56fe\u6807',
                },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6587\u5b57\u548c\u56fe\u6807',
            ),
          ),
          c.a.createElement(
            d.a,
            Object(a['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Switch } from \'faz-ui\';\nimport { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";\n\nexport default () =>\n  <div>\n    <Switch checkedChildren="\u5f00\u542f" unCheckedChildren="\u5173\u95ed" defaultChecked />\n    <br />\n    <Switch checkedChildren="1" unCheckedChildren="0" />\n    <br />\n    <Switch\n      checkedChildren={<AiOutlineCheck />}\n      unCheckedChildren={<AiOutlineClose />}\n      defaultChecked\n    />\n  </div>',
                },
              },
              {
                title: '\u6587\u5b57\u548c\u56fe\u6807',
                desc:
                  '<div class="markdown"><p>\u5e26\u6709\u6587\u5b57\u548c\u56fe\u6807\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4', 'react-icons': '3.11.0' },
                files: {},
              },
            ),
            c.a.createElement(E, null),
          ),
          c.a.createElement(
            'div',
            { className: 'markdown' },
            c.a.createElement(
              'h2',
              { id: 'api' },
              c.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                c.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            c.a.createElement(
              'table',
              null,
              c.a.createElement(
                'thead',
                null,
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('th', null, '\u5c5e\u6027'),
                  c.a.createElement('th', null, '\u8bf4\u660e'),
                  c.a.createElement('th', null, '\u7c7b\u578b'),
                  c.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              c.a.createElement(
                'tbody',
                null,
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'checked'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d',
                  ),
                  c.a.createElement('td', null, 'boolean'),
                  c.a.createElement('td', null, 'false'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'defaultChecked'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u521d\u59cb\u662f\u5426\u9009\u4e2d',
                  ),
                  c.a.createElement('td', null, 'boolean'),
                  c.a.createElement('td', null, 'false'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'disabled'),
                  c.a.createElement('td', null, '\u5931\u6548\u72b6\u6001'),
                  c.a.createElement('td', null, 'boolean'),
                  c.a.createElement('td', null, 'false'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'checkedChildren'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u9009\u4e2d\u65f6\u7684\u5185\u5bb9',
                  ),
                  c.a.createElement('td', null, 'React.ReactNode'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'unCheckedChildren'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u975e\u9009\u4e2d\u65f6\u7684\u5185\u5bb9',
                  ),
                  c.a.createElement('td', null, 'React.ReactNode'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'color'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e\u9009\u4e2d\u65f6\u7684\u80cc\u666f\u8272',
                  ),
                  c.a.createElement('td', null, 'string'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'size'),
                  c.a.createElement('td', null, '\u5f00\u5173\u5927\u5c0f'),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'default'),
                    ' ',
                    c.a.createElement('code', null, 'small'),
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement('code', null, 'default'),
                  ),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'inputRef'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u5185\u90e8 input \u7684 ref',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement(
                      'code',
                      null,
                      'React.Ref<HTMLInputElement>',
                    ),
                  ),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'style'),
                  c.a.createElement('td', null, '\u8bbe\u7f6e\u6837\u5f0f'),
                  c.a.createElement('td', null, 'React.CSSProperties'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'className'),
                  c.a.createElement('td', null, '\u8bbe\u7f6e\u7c7b\u540d'),
                  c.a.createElement('td', null, 'string'),
                  c.a.createElement('td', null, '-'),
                ),
                c.a.createElement(
                  'tr',
                  null,
                  c.a.createElement('td', null, 'onChange'),
                  c.a.createElement(
                    'td',
                    null,
                    '\u53d8\u5316\u65f6\u56de\u8c03\u51fd\u6570',
                  ),
                  c.a.createElement(
                    'td',
                    null,
                    c.a.createElement(
                      'code',
                      null,
                      '(event: React.ChangeEvent<HTMLInputElement>) => void',
                    ),
                  ),
                  c.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
