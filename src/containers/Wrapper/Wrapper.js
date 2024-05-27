import './Wrapper.scss';

const Wrapper = ({ children, className, ...other }) => {
  const classes = {
    root: [className, 'Wrapper'].join(' ').trim()
  };
  return <div className={classes.root} {...other}>{children}</div>;
};

export default Wrapper;
