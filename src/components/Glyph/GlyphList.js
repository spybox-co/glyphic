import './styles.scss';

export const GlyphList = (props) => {
  const { children } = props;

  return <ul className="glyph-list">{children}</ul>;
};

