/* @flow */
import axios from 'axios';

type Axios = {
  get: Function,
  post: Function,
  put: Function,
  path: Function,
  delete: Function,
};

export default class TelegramClient {
  static connect = (token: string): TelegramClient => new TelegramClient(token);

  _token: string;
  _http: Axios;

  constructor(token: string) {
    this._token = token;
    this._http = axios.create({
      baseURL: `https://api.telegram.org/bot${token}/`,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * https://core.telegram.org/bots/api#getwebhookinfo
   */
  getWebhookInfo = () => this._http.get('/getWebhookInfo');

  /**
   * https://core.telegram.org/bots/api#setwebhook
   */
  setWebhook = (url: string) =>
    this._http.post('/setWebhook', {
      url,
    });

  /**
   * https://core.telegram.org/bots/api#deletewebhook
   */
  deleteWebhook = () => this._http.post('/deleteWebhook');

  /**
   * https://core.telegram.org/bots/api#getme
   */
  getMe = () => this._http.get('/getMe');

  /**
   * https://core.telegram.org/bots/api#sendmessage
   */
  sendMessage = (chatId: string, text: string) =>
    this._http.post('/sendMessage', {
      chat_id: chatId,
      text,
    });

  /**
   * https://core.telegram.org/bots/api#sendphoto
   */
  sendPhoto = (chatId: string, photo: string) =>
    this._http.post('/sendPhoto', {
      chat_id: chatId,
      photo,
    });

  /**
   * https://core.telegram.org/bots/api#sendaudio
   */
  sendAudio = (chatId: string, audio: string) =>
    this._http.post('/sendAudio', {
      chat_id: chatId,
      audio,
    });

  /**
   * https://core.telegram.org/bots/api#senddocument
   */
  sendDocument = (chatId: string, document: string) =>
    this._http.post('/sendDocument', {
      chat_id: chatId,
      document,
    });

  /**
   * https://core.telegram.org/bots/api#sendsticker
   */
  sendSticker = (chatId: string, sticker: string) =>
    this._http.post('/sendSticker', {
      chat_id: chatId,
      sticker,
    });

  /**
   * https://core.telegram.org/bots/api#sendvideo
   */
  sendVideo = (chatId: string, video: string) =>
    this._http.post('/sendVideo', {
      chat_id: chatId,
      video,
    });

  /**
   * https://core.telegram.org/bots/api#sendvoice
   */
  sendVoice = (chatId: string, voice: string) =>
    this._http.post('/sendVoice', {
      chat_id: chatId,
      voice,
    });

  /**
   * https://core.telegram.org/bots/api#sendvideonote
   */
  sendVideoNote = (chatId: string, videoNote: string) =>
    this._http.post('/sendVideoNote', {
      chat_id: chatId,
      video_note: videoNote,
    });

  /**
   * https://core.telegram.org/bots/api#sendlocation
   */
  sendLocation = (
    chatId: string,
    { latitude, longitude }: { latitude: number, longitude: number }
  ) =>
    this._http.post('/sendLocation', {
      chat_id: chatId,
      latitude,
      longitude,
    });

  /**
   * https://core.telegram.org/bots/api#sendvenue
   */
  sendVenue = (
    chatId: string,
    {
      latitude,
      longitude,
      title,
      address,
    }: { latitude: number, longitude: number, title: string, address: string }
  ) =>
    this._http.post('/sendVenue', {
      chat_id: chatId,
      latitude,
      longitude,
      title,
      address,
    });

  /**
   * https://core.telegram.org/bots/api#sendcontact
   */
  sendContact = (
    chatId: string,
    { phoneNumber, firstName }: { phoneNumber: string, firstName: string }
  ) =>
    this._http.post('/sendContact', {
      chat_id: chatId,
      phone_number: phoneNumber,
      first_name: firstName,
    });

  /**
   * https://core.telegram.org/bots/api#sendchataction
   */
  sendChatAction = (chatId: string, action: string) =>
    this._http.post('/sendChatAction', {
      chat_id: chatId,
      action,
    });
}
