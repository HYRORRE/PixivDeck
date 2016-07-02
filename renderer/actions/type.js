export type RankingModeType = 'daily' | 'weekly' | 'monthly';

export type PixivActionType =
	| {type: 'currentWork', id: number | string}
	| {type: 'receive:works', works: Array<Object>}
	| {type: 'CLEAR_WORKS'};

export type PixivStateType = {
	works: Array<Object>,
	currentWorkId: string | number | null
};

export type ManageActionType =
	| {type: 'toggleModal'}
	| {type: 'closeModal'}
	| {type: 'CHANGE_RANKING_MODE', mode: RankingModeType};

export type ranking = {
	mode: RankingModeType
};

export type ManageStateType = {
	isModal: bool,
	ranking: ranking
};