import React from "react";

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {
      
  }
}
