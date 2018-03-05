import React from 'react';
import './condRoad.css';

const condRoad = {
  h_i: {
    code: '.parent {\n  text-align: center;\n}',
    note: 'This will work for inline, inline-block, inline-table, inline-flex, etc.',
    jsx: (
      <div style={{ textAlign: 'center' }}>
        <span>{'This text is centered.'}</span>
        <div>
          <a>{'We '}</a>
          <a>{'are '}</a>
          <a>{'some '}</a>
          <a>{'links'}</a>
        </div>
      </div>
    )
  },
  h_b_o: {
    code: '.child {\n  margin: 0 auto;\n}',
    note: 'Child element has a set width.',
    jsx: (
      <div className={'hbo-child'}>{`I'm a block level element and am centered.`}</div>
    )
  },
  h_b_m_i: {
    code: '.parent {\n  text-align: center;\n}\n\n.child {\n  display: inline-block;\n}',
    note: 'Make child elements a different display type.',
    jsx: (
      <div style={{ textAlign: 'center' }}>
        <div className={'hbmi-child'}>{`I'm an element that is block-like.`}</div>
        <div className={'hbmi-child'}>{`I'm an element that is block-like.`}</div>
        <div className={'hbmi-child'}>{`I'm an element that is block-like.`}</div>
      </div>
    )
  },
  h_b_m_v: {
    code: '.child {\n  margin: 0 auto;\n}',
    note: 'Child element has a set width.',
    jsx: (
      <div className={'hbmv-parent'}>
        <div>{`I'm an block-level element.`}</div>
        <div>{`I'm an block-level element.`}</div>
        <div>{`I'm an block-level element.`}</div>
      </div>
    )
  },
  v_i_a_p: {
    code: '.container {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}',
    note: 'There is equal padding above and below contents.',
    jsx: (
      <div>
        <span className={'viap-child'}>{'We are '}</span>
        <span className={'viap-child'}>{'Centered '}</span>
        <span className={'viap-child'}>{'Bits of '}</span>
        <span className={'viap-child'}>{'Text'}</span>
      </div>
    )
  },
  v_i_a_l: {
    code: '.container {\n  height: 50px;\n  line-height: 50px;\n}',
    note: 'A trick were making the line-height equal to the height will center the contents.',
    jsx: (
      <span className={'vial-child'}>{`I'm a centered line.`}</span>
    )
  },
  v_i_m_v: {
    code: '.container {\n  display: table-cell;\n  vertical-align: middle;\n}',
    note: 'The element the contents is in can be a table cell, either literally or made to behave like one with CSS.',
    jsx: (
      <span className={'vimv-child'}>{`I'm vertically centered multiple lines of text in a CSS-created table layout.`}</span>
    )
  },
  v_i_m_f: {
    code: '.container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  height: 100px;\n}',
    note: `It's only really relevant if the parent container has a fixed height (px, %, etc).`,
    jsx: (
      <span className={'vimf-child'}>{`I'm vertically centered multiple lines of text in a flexbox container.`}</span>
    )
  },
  v_i_m_c: {
    code: '.parent {\n  height: 100px;\n}\n\n.parent::before {\n  content: "";\n  height: 100%;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.container: {\n  vertical-align: middle;\n  display: inline-block;\n}',
    note: `We can employ the "ghost element" technique, in which a full-height pseudo element is placed inside the container and the contents is vertically aligned with that.`,
    jsx: (
      <div className={'vimc-parent'}>
        <span className={'vimc-child'}>{`I'm vertically centered multiple lines of text in a container. Centered with a ghost pseudo element.`}</span>
      </div>
    )
  },
  v_b_k: {
    code: '.parent {\n  position: relative;\n}\n\n.child: {\n  position: absolute;\n  top: 50%;\n  height: 60px;\n  margin-top: -30px;\n}',
    note: `The margin-top of child element is a half of it's height.`,
    jsx: (
      <div className={'relative-parent'}>
        <div className={'vbk-child'}>
          {`I'm a block-level element with a fixed height, centered vertically within my parent.`}
        </div>
      </div>
    )
  },
  v_b_u_t: {
    code: '.parent {\n  position: relative;\n}\n\n.child: {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}',
    note: `Nudge child element up half of its height after bumping it down halfway.`,
    jsx: (
      <div className={'relative-parent'}>
        <div className={'vbut-child'}>
          {`I'm a block-level element with an unknown height, centered vertically within my parent.`}
        </div>
      </div>
    )
  },
  v_b_u_f: {
    code: '.container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}',
    note: `Flexbox is easy to use, but keep in mind its compatibility.`,
    jsx: (
      <div className={'vbuf-parent'}>
        <div className={'flex-child'}>
          {`I'm a block-level element with an unknown height, centered vertically within my parent.`}
        </div>
      </div>
    )
  },
  b_o_f: {
    code: '.parent {\n  position: relative;\n}\n\n.child: {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  height: 60px;\n  margin-left: -200px;\n  margin-top: -30px;\n}',
    note: `Using negative margins equal to half of that width and height, after you've absolutely positioned it at 50% / 50% will center child element.`,
    jsx: (
      <div className={'relative-parent'}>
        <div className={'bof-child'}>
          {`I'm centered!`}
        </div>
      </div>
    )
  },
  b_o_u: {
    code: '.parent {\n  position: relative;\n}\n\n.child: {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}',
    note: `We can use the transform property and a negative translate of 50% in both directions (it is based on the current width/height of the element) to center child element.`,
    jsx: (
      <div className={'relative-parent'}>
        <div className={'bou-child'}>
          {`I'm centered!`}
        </div>
      </div>
    )
  },
  b_m_f: {
    code: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}',
    note: `Use two centering properties: justify-content and align-items.`,
    jsx: (
      <div className={'bmf-parent'}>
        <span className={'flex-child'}>
          {`I'm centered!`}
        </span>
      </div>
    )
  },
  b_m_g: {
    code: '.parent {\n  display: grid;\n}\n\n.child {\n  margin: auto;\n}',
    note: `Most browsers don't support display: grid.`,
    jsx: (
      <div className={'bmg-parent'}>
        <span className={'bmg-child'}>
          {`I'm centered!`}
        </span>
      </div>
    )
  },
};

export default condRoad;
