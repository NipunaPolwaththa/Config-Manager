/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import * as AI from 'react-icons/ai';

function Tooltip({ text }) {
  return (
    <Tippy content={text}>
      <button type="button" aria-label="tooltip" className="ml-2">
        <AI.AiTwotoneInfoCircle size={20} />
      </button>
    </Tippy>
  );
}
export default Tooltip;
