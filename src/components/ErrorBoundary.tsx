import { Component, ReactNode } from "react";
import PageNotFound from "./PageNotFound";

interface Props {
  children: ReactNode;
  //   onGoBack: () => void;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return <PageNotFound />;
  }
}

export default ErrorBoundary;
