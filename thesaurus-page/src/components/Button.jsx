import { Link } from 'react-router-dom';

function Button({ children, to, href, onClick, variant = 'primary', className = '' }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href || '#'} onClick={onClick}>
      {children}
    </a>
  );
}

export default Button;
