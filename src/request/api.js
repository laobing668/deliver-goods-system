import { get, post } from './http.js'

export function getHaoKanVideo(data) {
	return get('getHaoKanVideo', data)
}

export function login(data) {
	return post('loginUrl', data)
}