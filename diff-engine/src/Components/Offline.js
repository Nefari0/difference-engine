import { useContext,useEffect } from 'react';
import { useBooleanState } from 'webrix/hooks';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ViewContext } from './Context/view.context';

export default function Offline({ children }) {
  const { value: online, setFalse: setOffline, setTrue: setOnline } = useBooleanState(navigator.onLine);
  const { fullscreen } = useContext(ViewContext)
    // const previousOnline = usePrevious(online);

    if (fullscreen) {
      disableBodyScroll(document.body)
    } else {
      enableBodyScroll(document.body)
    }
  useEffect(() => {
        // enableBodyScroll(document.body);
      // disableBodyScroll(document.body)
    }, [online]);

    useEffect(() => {
        window.addEventListener('online', setOnline);
        window.addEventListener('offline', setOffline);

        return () => {
            window.removeEventListener('online', setOnline);
            window.removeEventListener('offline', setOffline);
        };
    }, []);

  return (
     <div>
        {children}
    </div>
  );
}