// WebSocket so'rov ma'lumotlari uchun interfeys
interface WebSocketRequest {
  name: string;
  plugin?: string;
  arguments?: any;
  onSuccess?: (data: any) => void;
  onError?: (reason: string) => void;
}

// WebSocket javobi uchun interfeys
interface WebSocketResponse {
  success: boolean;
  data?: any;
  reason?: string;
}

// Dinamik BASE_URL
const BASE_URL =
  (window.location.protocol.toLowerCase() === 'https:'
    ? 'wss://127.0.0.1:64443'
    : 'ws://127.0.0.1:64646') + '/service/cryptapi';

const ws = ({ name, plugin, arguments: args, onSuccess, onError }: WebSocketRequest): Promise<any> => {
  return new Promise((resolve, reject) => {
    try {
      const socket = new WebSocket(BASE_URL);

      socket.onopen = () => {
        socket.send(JSON.stringify({ name, plugin, arguments: args }));
      };

      socket.onmessage = (event: MessageEvent) => {
        const data: WebSocketResponse = JSON.parse(event.data);
        if (data.success) {
          if (onSuccess) onSuccess(data);
          resolve(data);
        } else {
          if (onError) onError(data.reason || 'Unknown error');
          reject(data.reason || 'Unknown error');
        }
        socket.close();
      };

      socket.onerror = () => {
        const error = 'install_the_e_imzo_module_or_the_e_imzo_browser';
        if (onError) onError(error);
        reject(error);
      };
    } catch {
      const error = 'install_the_e_imzo_module_or_the_e_imzo_browser';
      if (onError) onError(error);
      reject(error);
    }
  });
};

export default ws;
