import ProfileApi, { PingResult } from '../api/ProfileApi';

class ProfileRepository {
  async ping(message: string): Promise<PingResult> {
    const trimmed = message.trim();
    if (!trimmed) {
      throw new Error('Message must not be empty');
    }
    return ProfileApi.ping(trimmed);
  }
}

export default new ProfileRepository();
