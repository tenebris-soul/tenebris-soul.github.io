import { Link } from 'react-router-dom';

function Button({ children, to, href, onClick, variant = 'primary', className = '', download }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href || '#'} onClick={onClick} download={download}>
      {children}
    </a>
  );
}

export default Button;
