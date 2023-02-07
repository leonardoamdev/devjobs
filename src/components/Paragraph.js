import classNames from 'classnames';
import React from 'react';

const Paragraph = ({
  title = '',
  description = '',
  listItems = [],
  listType = 'none',
}) => {
  return (
    <div className="text-secondary">
      {title && (
        <h2 className="mt-10 text-black dark:text-white text-xl">{title}</h2>
      )}
      {description && <p className="mt-[23px]">{description}</p>}
      {listItems.length > 0 && (
        <ul
          className={classNames('mt-6 ml-[18px]', {
            'list-decimal': listType === 'decimal',
            'list-disc': listType === 'disc',
          })}
        >
          {listItems.map((item, idx) => (
            <li key={idx}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Paragraph;
