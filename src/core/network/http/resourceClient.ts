import axios, { isAxiosError } from 'axios';
import { NetworkConfig } from './config';

export interface ResourceLocator {
  namespace?: string | null;
  name?: string | null;
}

export enum ResourceView {
  Public = 'public',
  RootPage = 'rootpage',
}

function buildResourcePath(resourceType: string, resourceId: ResourceLocator | null | undefined): string {
  const namespace = resourceId?.namespace ?? '';
  const name = resourceId?.name ?? '';
  return `${NetworkConfig.baseURL}/public/api/v1/resources/${resourceType}/namesapces/${namespace}/names/${name}`;
}

export function buildResourceUrl(
  resourceType: string,
  resourceId: ResourceLocator | null | undefined,
  sas: string | null | undefined,
  view: ResourceView
): string {
  const params = new URLSearchParams({ sas: sas ?? '', view });
  return `${buildResourcePath(resourceType, resourceId)}?${params.toString()}`;
}

export async function performExternalResourceRequest<T>(
  resourceType: string,
  resourceId: ResourceLocator | null | undefined,
  sas: string | null | undefined,
  view: ResourceView,
  decode: (bytes: Uint8Array) => T,
  notFoundDefault?: () => T
): Promise<T> {
  try {
    const response = await axios.get(buildResourcePath(resourceType, resourceId), {
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
