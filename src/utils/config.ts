export default class Config {
  static appVersion = 'v3.11.4'
  static referer = 'https://www.aliyundrive.com/'
  static downAgent = 'okhttp/4.2.2'
  static userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) aDrive/4.1.0 Chrome/108.0.5359.215 Electron/22.3.1 Safari/537.36'
  static loginUrl = 'https://auth.aliyundrive.com/v2/oauth/authorize?login_type=custom&response_type=code&redirect_uri=https%3A%2F%2Fwww.aliyundrive.com%2Fsign%2Fcallback&client_id=25dzX3vbYqktVxyX&state=%7B%22origin%22%3A%22https%3A%2F%2Fwww.aliyundrive.com%2F%22%7D'
  static loginUrlAccount = 'https://passport.aliyundrive.com/mini_login.htm?lang=zh_cn&appName=aliyun_drive&appEntrance=web&styleType=auto&bizParams=&notLoadSsoView=false&notKeepLogin=false&isMobile=false&&rnd=0.1100330129139'
  static qrCodeLoginUrl = 'https://open.aliyundrive.com/oauth/authorize/qrcode'
  static accessTokenUrl = 'https://open.aliyundrive.com/oauth/access_token'
  static driverInfoUrl = 'https://open.aliyundrive.com/adrive/v1.0/user/getDriveInfo'
  static listFile = 'adrive/v1.0/openFile/list'
}