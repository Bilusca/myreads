import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ show }) => {
  const styles = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'fixed',
    top: '0px',
    zIndex: '10',
    width: '100%',
    height: window.innerHeight,
    display: show ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  }

  return (
    <div style={styles}>
      <img src="img/loading.gif" alt="Loading GIF" />
    </div>
  )
}

Loading.propTypes = {
  show: PropTypes.bool.isRequired
}

export default Loading