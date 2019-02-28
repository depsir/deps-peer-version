import { version } from 'deps-version';

export function peerVersion(){
    return 'peer-version ' + version();
}
