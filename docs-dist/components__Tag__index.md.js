(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [16],
  {
    '/s3z': function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t('0Owb'),
        l = t('q1tI'),
        r = t.n(l),
        c = (t('B2uJ'), t('+su7'), t('qOys'), t('5Yjd')),
        o = t.n(c),
        u = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('q1tI')),
            n = t('/7QA'),
            l = function() {
              return a['default'].createElement(
                'div',
                null,
                a['default'].createElement(n.Tag, null, 'Tag'),
                a['default'].createElement(
                  n.Tag,
                  null,
                  a['default'].createElement(
                    'a',
                    {
                      href: 'https://github.com/huyinglin/faz-ui',
                      target: '_blank',
                    },
                    'Link',
                  ),
                ),
              );
            };
          return a['default'].createElement(l);
        }),
        i = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('q1tI')),
            n = t('/7QA');
          function l(e) {
            console.log('onClose');
          }
          var r = function() {
            return a['default'].createElement(
              n.Tag,
              { closable: !0, onClose: l },
              'Tag',
            );
          };
          return a['default'].createElement(r);
        }),
        d = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('q1tI')),
            n = t('/7QA'),
            l = function() {
              return a['default'].createElement(
                'div',
                null,
                a['default'].createElement(
                  n.Tag,
                  { color: 'success' },
                  'success',
                ),
                a['default'].createElement(
                  n.Tag,
                  { color: 'processing' },
                  'processing',
                ),
                a['default'].createElement(n.Tag, { color: 'error' }, 'error'),
                a['default'].createElement(
                  n.Tag,
                  { color: 'warning' },
                  'warning',
                ),
                a['default'].createElement(
                  n.Tag,
                  { color: 'default' },
                  'default',
                ),
                a['default'].createElement('br', null),
                a['default'].createElement(n.Tag, { color: '#f50' }, '#f50'),
                a['default'].createElement(
                  n.Tag,
                  { color: '#2db7f5' },
                  '#2db7f5',
                ),
                a['default'].createElement(
                  n.Tag,
                  { color: '#87d068' },
                  '#87d068',
                ),
                a['default'].createElement(
                  n.Tag,
                  { color: '#108ee9' },
                  '#108ee9',
                ),
                a['default'].createElement('br', null),
                a['default'].createElement(n.Tag, { color: 'pink' }, 'pink'),
                a['default'].createElement(
                  n.Tag,
                  { color: 'yellow' },
                  'yellow',
                ),
                a['default'].createElement(
                  n.Tag,
                  { color: 'magenta' },
                  'magenta',
                ),
                a['default'].createElement(n.Tag, { color: 'red' }, 'red'),
                a['default'].createElement(
                  n.Tag,
                  { color: 'volcano' },
                  'volcano',
                ),
                a['default'].createElement(
                  n.Tag,
                  { color: 'orange' },
                  'orange',
                ),
                a['default'].createElement(n.Tag, { color: 'gold' }, 'gold'),
                a['default'].createElement(n.Tag, { color: 'lime' }, 'lime'),
                a['default'].createElement(n.Tag, { color: 'green' }, 'green'),
                a['default'].createElement(n.Tag, { color: 'cyan' }, 'cyan'),
                a['default'].createElement(n.Tag, { color: 'blue' }, 'blue'),
                a['default'].createElement(
                  n.Tag,
                  { color: 'geekblue' },
                  'geekblue',
                ),
                a['default'].createElement(
                  n.Tag,
                  { color: 'purple' },
                  'purple',
                ),
              );
            };
          return a['default'].createElement(l);
        }),
        m = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('q1tI')),
            n = t('/7QA'),
            l = function() {
              return a['default'].createElement(
                n.Tag,
                {
                  styleConfig: {
                    background: '#fff',
                    borderColor: '#108ee9',
                    color: '#108ee9',
                  },
                },
                'Tag',
              );
            };
          return a['default'].createElement(l);
        }),
        s = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('tJVT')),
            n = e(t('q1tI')),
            l = t('/7QA'),
            r = n['default'].useState(!0),
            c = (0, a['default'])(r, 2),
            o = c[0],
            u = c[1],
            i = function() {
              return n['default'].createElement(
                l.Tag,
                {
                  checked: o,
                  onCheck: function(e) {
                    return u(e);
                  },
                },
                'Tag',
              );
            };
          return n['default'].createElement(i);
        }),
        g = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('tJVT')),
            n = e(t('q1tI')),
            l = t('/7QA'),
            r = n['default'].useState(!0),
            c = (0, a['default'])(r, 2),
            o = c[0],
            u = c[1],
            i = function() {
              return n['default'].createElement(
                l.Tag,
                {
                  checkedBackground: '#f50',
                  checked: o,
                  onCheck: function(e) {
                    return u(e);
                  },
                },
                'Tag',
              );
            };
          return n['default'].createElement(i);
        }),
        E = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('q1tI')),
            n = t('/7QA'),
            l = t('33Fu'),
            r = function() {
              return a['default'].createElement(
                'div',
                null,
                a['default'].createElement(
                  n.Tag,
                  {
                    icon: a['default'].createElement(l.AiOutlineTwitter, null),
                    color: '#55acee',
                  },
                  'Twitter',
                ),
                a['default'].createElement(
                  n.Tag,
                  {
                    icon: a['default'].createElement(l.AiOutlineYoutube, null),
                    color: '#cd201f',
                  },
                  'Youtube',
                ),
                a['default'].createElement(
                  n.Tag,
                  {
                    icon: a['default'].createElement(l.AiOutlineFacebook, null),
                    color: '#3b5999',
                  },
                  'Facebook',
                ),
                a['default'].createElement(
                  n.Tag,
                  {
                    icon: a['default'].createElement(l.AiOutlineLinkedin, null),
                    color: '#55acee',
                  },
                  'LinkedIn',
                ),
              );
            };
          return a['default'].createElement(r);
        }),
        f = r.a.memo(function() {
          var e = t('K+nK'),
            a = e(t('tJVT')),
            n = e(t('q1tI')),
            l = t('/7QA'),
            r = n['default'].useState(!0),
            c = (0, a['default'])(r, 2),
            o = c[0],
            u = c[1],
            i = function() {
              return n['default'].createElement(
                'div',
                null,
                n['default'].createElement(
                  l.Button,
                  {
                    style: { marginBottom: 8 },
                    type: 'primary',
                    onClick: function() {
                      return u(!o);
                    },
                  },
                  'Toggle Visible',
                ),
                n['default'].createElement('br', null),
                n['default'].createElement(l.Tag, { visible: o }, 'Tag'),
              );
            };
          return n['default'].createElement(i);
        });
      a['default'] = function() {
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'tag-\u6807\u7b7e' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#tag-\u6807\u7b7e' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Tag \u6807\u7b7e',
            ),
            r.a.createElement('hr', null),
            r.a.createElement(
              'h3',
              { id: '\u57fa\u672c\u7528\u6cd5' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u57fa\u672c\u7528\u6cd5' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u57fa\u672c\u7528\u6cd5',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Tag } from \'faz-ui\';\n\nexport default () =>\n  <div>\n    <Tag>Tag</Tag>\n    <Tag><a href="https://github.com/huyinglin/faz-ui" target="_blank">Link</a></Tag>\n  </div>',
                },
              },
              {
                title: 'Basic Radio',
                desc:
                  '<div class="markdown"><p>\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(u, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u53ef\u5220\u9664' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u53ef\u5220\u9664' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u53ef\u5220\u9664',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Tag } from 'faz-ui';\n\nfunction onClose(e) {\n  console.log('onClose')\n}\n\nexport default () => <Tag closable onClose={onClose}>Tag</Tag>",
                },
              },
              {
                title: 'Closable',
                desc:
                  '<div class="markdown"><p>Tag \u53ef\u5220\u9664\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(i, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u591a\u5f69\u6807\u7b7e' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u591a\u5f69\u6807\u7b7e' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u591a\u5f69\u6807\u7b7e',
            ),
            r.a.createElement('p', null, 'Preset Type Tag:'),
          ),
          r.a.createElement(
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Tag } from \'faz-ui\';\n\nexport default () =>\n  <div>\n    <Tag color="success">success</Tag>\n    <Tag color="processing">processing</Tag>\n    <Tag color="error">error</Tag>\n    <Tag color="warning">warning</Tag>\n    <Tag color="default">default</Tag>\n    <br/>\n    <Tag color="#f50">#f50</Tag>\n    <Tag color="#2db7f5">#2db7f5</Tag>\n    <Tag color="#87d068">#87d068</Tag>\n    <Tag color="#108ee9">#108ee9</Tag>\n    <br/>\n    <Tag color="pink">pink</Tag>\n    <Tag color="yellow">yellow</Tag>\n    <Tag color="magenta">magenta</Tag>\n    <Tag color="red">red</Tag>\n    <Tag color="volcano">volcano</Tag>\n    <Tag color="orange">orange</Tag>\n    <Tag color="gold">gold</Tag>\n    <Tag color="lime">lime</Tag>\n    <Tag color="green">green</Tag>\n    <Tag color="cyan">cyan</Tag>\n    <Tag color="blue">blue</Tag>\n    <Tag color="geekblue">geekblue</Tag>\n    <Tag color="purple">purple</Tag>\n  </div>',
                },
              },
              {
                title: 'Color',
                desc:
                  '<div class="markdown"><p>\u6211\u4eec\u6dfb\u52a0\u4e86\u591a\u79cd\u9884\u8bbe\u8272\u5f69\u7684\u6807\u7b7e\u6837\u5f0f\uff0c\u7528\u4f5c\u4e0d\u540c\u573a\u666f\u4f7f\u7528\u3002\u5982\u679c\u9884\u8bbe\u503c\u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u5177\u4f53\u7684\u8272\u503c\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(d, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u6807\u7b7e\u6837\u5f0f' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u6807\u7b7e\u6837\u5f0f' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u6807\u7b7e\u6837\u5f0f',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Tag } from 'faz-ui';\n\nexport default () =>\n  <Tag\n    styleConfig={{\n      background: '#fff',\n      borderColor: '#108ee9',\n      color: '#108ee9'\n    }}\n  >\n    Tag\n  </Tag>",
                },
              },
              {
                title: 'StyleConfig',
                desc:
                  '<div class="markdown"><p>\u8bbe\u7f6e\u6807\u7b7e\u7684\u989c\u8272\uff0c\u53ef\u8bbe\u7f6e background\u3001borderColor\u3001color\u3002\u540c\u65f6 color \u5c5e\u6027\u5c06\u5931\u6548\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(m, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u53ef\u9009\u62e9\u6807\u7b7e' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u53ef\u9009\u62e9\u6807\u7b7e',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u53ef\u9009\u62e9\u6807\u7b7e',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Tag } from 'faz-ui';\n\nconst [checked, setChecked] = React.useState(true);\n\nexport default () => <Tag checked={checked} onCheck={check => setChecked(check)}>Tag</Tag>",
                },
              },
              {
                title: 'Checkable',
                desc:
                  '<div class="markdown"><p>\u5f53\u4f7f\u7528\u53ef\u9009\u62e9\u6807\u7b7e\u65f6\uff0c\u5fc5\u987b\u4f7f\u7528\u53d7\u63a7\u6a21\u5f0f\u3002\u540c\u65f6 closable \u5c5e\u6027\u5c06\u5931\u6548\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(s, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u9009\u4e2d\u65f6\u80cc\u666f\u989c\u8272' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u9009\u4e2d\u65f6\u80cc\u666f\u989c\u8272',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u9009\u4e2d\u65f6\u80cc\u666f\u989c\u8272',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Tag } from 'faz-ui';\n\nconst [checked, setChecked] = React.useState(true);\n\nexport default () =>\n  <Tag\n    checkedBackground=\"#f50\"\n    checked={checked}\n    onCheck={check => setChecked(check)}\n  >\n    Tag\n  </Tag>",
                },
              },
              {
                title: 'CheckedBackground',
                desc:
                  '<div class="markdown"><p>\u8bbe\u7f6e\u9009\u4e2d\u65f6\u6807\u7b7e\u7684\u80cc\u666f\u989c\u8272\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(g, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u56fe\u6807\u6309\u94ae' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#\u56fe\u6807\u6309\u94ae' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u56fe\u6807\u6309\u94ae',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    'import React from \'react\';\nimport { Tag } from \'faz-ui\';\n\nimport { AiOutlineTwitter, AiOutlineYoutube, AiOutlineFacebook, AiOutlineLinkedin } from \'react-icons/ai\';\n\nexport default () =>\n  <div>\n    <Tag icon={<AiOutlineTwitter />} color="#55acee">\n      Twitter\n    </Tag>\n    <Tag icon={<AiOutlineYoutube />} color="#cd201f">\n      Youtube\n    </Tag>\n    <Tag icon={<AiOutlineFacebook />} color="#3b5999">\n      Facebook\n    </Tag>\n    <Tag icon={<AiOutlineLinkedin />} color="#55acee">\n      LinkedIn\n    </Tag>\n  </div>',
                },
              },
              {
                title: 'Icon',
                desc:
                  '<div class="markdown"><p>\u5f53\u9700\u8981\u5728 Tag \u5185\u5d4c\u5165 Icon \u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e icon \u5c5e\u6027\uff0c\u6216\u8005\u76f4\u63a5\u5728 Tag \u5185\u4f7f\u7528 Icon \u7ec4\u4ef6\u3002\u5982\u679c\u60f3\u63a7\u5236 Icon \u5177\u4f53\u7684\u4f4d\u7f6e\uff0c\u53ea\u80fd\u76f4\u63a5\u4f7f\u7528 Icon \u7ec4\u4ef6\uff0c\u800c\u975e icon \u5c5e\u6027\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4', 'react-icons': '3.11.0' },
                files: {},
              },
            ),
            r.a.createElement(E, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h3',
              { id: '\u63a7\u5236\u5173\u95ed\u72b6\u6001' },
              r.a.createElement(
                'a',
                {
                  'aria-hidden': 'true',
                  href: '#\u63a7\u5236\u5173\u95ed\u72b6\u6001',
                },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              '\u63a7\u5236\u5173\u95ed\u72b6\u6001',
            ),
          ),
          r.a.createElement(
            o.a,
            Object(n['a'])(
              {
                source: {
                  jsx:
                    "import React from 'react';\nimport { Tag, Button } from 'faz-ui';\n\nconst [visible, setVisible] = React.useState(true);\n\nexport default () =>\n  <div>\n    <Button style={{ marginBottom: 8 }} type=\"primary\" onClick={() => setVisible(!visible)}>Toggle Visible</Button>\n    <br/>\n    <Tag visible={visible}>Tag</Tag>\n  </div>",
                },
              },
              {
                title: 'Visible',
                desc:
                  '<div class="markdown"><p>\u901a\u8fc7 visible \u5c5e\u6027\u63a7\u5236\u5173\u95ed\u72b6\u6001\u3002</p></div>',
                dependencies: { 'faz-ui': '1.0.4' },
                files: {},
              },
            ),
            r.a.createElement(f, null),
          ),
          r.a.createElement(
            'div',
            { className: 'markdown' },
            r.a.createElement(
              'h2',
              { id: 'api' },
              r.a.createElement(
                'a',
                { 'aria-hidden': 'true', href: '#api' },
                r.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'API',
            ),
            r.a.createElement(
              'table',
              null,
              r.a.createElement(
                'thead',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('th', null, '\u5c5e\u6027'),
                  r.a.createElement('th', null, '\u8bf4\u660e'),
                  r.a.createElement('th', null, '\u7c7b\u578b'),
                  r.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                ),
              ),
              r.a.createElement(
                'tbody',
                null,
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'closable'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u6807\u7b7e\u662f\u5426\u53ef\u4ee5\u5173\u95ed',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'closeIcon'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae',
                  ),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'color'),
                  r.a.createElement('td', null, '\u6807\u7b7e\u989c\u8272'),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'visible'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u662f\u5426\u663e\u793a\u6807\u7b7e',
                  ),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'true'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'icon'),
                  r.a.createElement('td', null, '\u8bbe\u7f6eIcon'),
                  r.a.createElement('td', null, 'React.ReactNode'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'checked'),
                  r.a.createElement('td', null, '\u662f\u5426\u9009\u4e2d'),
                  r.a.createElement('td', null, 'boolean'),
                  r.a.createElement('td', null, 'false'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'checkedBackground'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u9009\u4e2d\u540e\u6807\u7b7e\u7684\u80cc\u666f\u8272',
                  ),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'styleConfig'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u914d\u7f6e Tag \u6837\u5f0f',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    '{',
                    ' background: string; borderColor: string; color: string; ',
                    '}',
                  ),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'style'),
                  r.a.createElement('td', null, '\u8bbe\u7f6e\u6837\u5f0f'),
                  r.a.createElement('td', null, 'React.CSSProperties'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'className'),
                  r.a.createElement('td', null, '\u8bbe\u7f6e\u7c7b\u540d'),
                  r.a.createElement('td', null, 'string'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onCheck'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u70b9\u51fb\u5e26\u6709 checked \u5c5e\u6027\u6807\u7b7e\u7684\u56de\u8c03',
                  ),
                  r.a.createElement('td', null, '(checked: boolean) => void'),
                  r.a.createElement('td', null, '-'),
                ),
                r.a.createElement(
                  'tr',
                  null,
                  r.a.createElement('td', null, 'onClose'),
                  r.a.createElement(
                    'td',
                    null,
                    '\u5173\u95ed\u65f6\u7684\u56de\u8c03',
                  ),
                  r.a.createElement(
                    'td',
                    null,
                    r.a.createElement(
                      'code',
                      null,
                      '(e: React.MouseEvent<HTMLSpanElement>) => void',
                    ),
                  ),
                  r.a.createElement('td', null, '-'),
                ),
              ),
            ),
          ),
        );
      };
    },
  },
]);
