import React, {Fragment} from 'react';

export default function Button(props) {

    const { href, aria,classN, title} = props;
  return (
    <Fragment>
      <div>

      <a
            href={href}
            aria-label={aria}
            title={aria}
            className={classN}
        >
            {title}
        </a>
      </div>
    </Fragment>
  )
}
