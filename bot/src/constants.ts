export const enum LobbyRegion {
    ASIA = "Asia",
    NORTH_AMERICA = "North America",
    EUROPE = "Europe",
}

export const enum SessionState {
    LOBBY = "lobby",
    PLAYING = "playing",
    DISCUSSING = "discussing",
}

export const SERVER_IPS = {
    [LobbyRegion.EUROPE]: "172.105.251.170",
    [LobbyRegion.NORTH_AMERICA]: "198.58.99.71",
    [LobbyRegion.ASIA]: "139.162.111.196",
};

export const SHORT_REGION_NAMES = {
    [LobbyRegion.EUROPE]: "EU",
    [LobbyRegion.NORTH_AMERICA]: "NA",
    [LobbyRegion.ASIA]: "AS",
};

export const COLOR_EMOTES: { [key: number]: string } = {
    [0]: "crewmate_red:767855453345808385",
    [1]: "crewmate_blue:767859541638381588",
    [2]: "crewmate_green:767859541651882044",
    [3]: "crewmate_pink:767859541672067073",
    [4]: "crewmate_orange:767859541521727509",
    [5]: "crewmate_yellow:767859541777711104",
    [6]: "crewmate_black:767859541432860744",
    [7]: "crewmate_white:767859541681373215",
    [8]: "crewmate_purple:767859541630124033",
    [9]: "crewmate_brown:767859541647294524",
    [10]: "crewmate_cyan:767859541689630740",
    [11]: "crewmate_lime:767859541709684816",
};

export const DEAD_COLOR_EMOTES: { [key: number]: string } = {
    [0]: "crewmate_red_dead:767859541663809547",
    [1]: "crewmate_blue_dead:767859541651619901",
    [2]: "crewmate_green_dead:767859541680848906",
    [3]: "crewmate_pink_dead:767859541781512192",
    [4]: "crewmate_orange_dead:767859541798158336",
    [5]: "crewmate_yellow_dead:767859541483192321",
    [6]: "crewmate_black_dead:767859541663547412",
    [7]: "crewmate_white_dead:767859541861335110",
    [8]: "crewmate_purple_dead:767859541643493439",
    [9]: "crewmate_brown_dead:767859541433778207",
    [10]: "crewmate_cyan_dead:767859541580709959",
    [11]: "crewmate_lime_dead:767859541353168898",
};

export const BOT_INVITE_LINK =
    "https://discord.com/api/oauth2/authorize?client_id=755520374510321745&permissions=21261521&scope=bot";

export const COLOR_EMOTE_IDS = Object.values(COLOR_EMOTES).map(x => x.split(":")[1]);

export const EMOTE_IDS_TO_COLOR: { [key: string]: number } = {};
Object.entries(COLOR_EMOTES).forEach(x => (EMOTE_IDS_TO_COLOR[x[1].split(":")[1]] = +x[0]));

export const GROUPING_DISABLED_EMOJI = "<:impostor_grouping_disabled:767859541416083470>";
export const GROUPING_ENABLED_EMOJI = "<:impostor_grouping_enabled:767859541756608522>";
export const GROUPING_TOGGLE_EMOJI = "toggle_impostor_grouping:767859541747433482";
export const LEAVE_EMOJI = "leave_lobby:767859541454749727";
