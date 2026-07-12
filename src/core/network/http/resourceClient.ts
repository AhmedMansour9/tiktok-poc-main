import axios, { isAxiosError } from 'axios';
import { NetworkConfig } from './config';

export interface ResourceLocator {
  namespace?: string | null;
  name?: string | null;
}


export async function performExternalResourceRequest<T>(
  resourceType: string,
  resourceId: ResourceLocator | null | undefined,
  sas: string | null | undefined,
  view: string,
  decode: (bytes: Uint8Array) => T,

  notFoundDefault?: () => T
): Promise<T> {
  const namespace = resourceId?.namespace ?? '';
  const name = resourceId?.name ?? '';
  const url = `${NetworkConfig.baseURL}/public/api/v1/resources/${resourceType}/namesapces/${namespace}/names/${name}`;

  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      params: { sas: sas ?? '', view },
    });

    return decode(new Uint8Array(response.data));
  } catch (error) {
    if (notFoundDefault && isAxiosError(error) && error.response?.status === 404) {
      return notFoundDefault();
    }
    throw error;
  }
}
