import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      // size: props.size,
      // text: props.text || 'placeholder',
    }
    this.handleClick = this.handleClick.bind(this);
  }
  // handleChange(event) {
  //   this.setState({
  //     text: 'clicked'
  //   });
  // }
  handleClick(e) {
    if (!this.props.loading) {
      this.props.onClick && this.props.onClick(e);
    }
  }
  // handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
  //   const { onClick } = this.props;
  //   if (onClick) {
  //     (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
  //   }
  // }
  render() {
    // const {
    //   type, shape, size, className, children, icon, prefixCls, ghost, loading: _loadingProp, block, ...rest
    // } = this.props;
    const { size, className, icon, prefixCls, type, children, htmlType } = this.props;
    // const { l
    // large => lg
    // small => sm
    let sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
      default:
        break;
    }

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      // [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !children && icon,
      // [`${prefixCls}-loading`]: loading,
      // [`${prefixCls}-background-ghost`]: ghost,
      // [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar,
      // [`${prefixCls}-block`]: block,
    });

    // const iconType = loading ? 'loading' : icon;
    // const iconNode = iconType ? <Icon type={iconType} /> : null;
    // const kids = (children || children === 0)
    //   ? React.Children.map(children, child => insertSpace(child, this.isNeedInserted())) : null;

    return (
      <button
        type={htmlType || 'button'}
        className={classes}
        onClick={this.handleClick}
      >
       {this.props.children}
      </button>
      // <button className="" type="button" onClick={this.handleChange}>{this.state.text}</button>
    )
  }
}

Button.defaultProps = {
  prefixCls: 'y-btn',
  loading: false,
  ghost: false,
  block: false,
};

// Button.propTypes = {
//   onClick: PropTypes.func,
//   type: PropTypes.string,
//   size: PropTypes.string,
//   icon: PropTypes.string,
//   nativeType: PropTypes.string,
//   loading: PropTypes.bool,
//   disabled: PropTypes.bool,
//   plain: PropTypes.bool
// }
Button.propTypes = {
  type: PropTypes.string,
  // shape: PropTypes.oneOf(['circle', 'circle-outline']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
  // onClick: PropTypes.func,
  // loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  className: PropTypes.string,
  icon: PropTypes.string,
  // block: PropTypes.bool,
};

export default Button