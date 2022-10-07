import { Snowflake } from '../custom-types/snowflake';
import DiscordInteractionResponse from '../data-objects/discord-interaction-response';
import { DiscordMessageCreate } from '../data-objects/discord-message-create';
import DiscordMessageEdit from '../data-objects/discord-message-edit';
import { DiscordMessage } from '../data-objects/discord-message';
import { DiscordGatewayBotInfo } from '../data-objects/discord-gateway-bot-info';
import { DiscordApplicationCommand } from '../data-objects/discord-application-command';
export declare function getGatewayBot(): Promise<DiscordGatewayBotInfo>;
export declare function interactionCallback(interactionId: number, interactionToken: string, data: DiscordInteractionResponse): Promise<void>;
export declare function createMessage(channelId: Snowflake, message: DiscordMessageCreate): Promise<DiscordMessage>;
export declare function editMessage(channelId: Snowflake, messagelId: Snowflake, message: DiscordMessageEdit): Promise<DiscordMessage>;
export declare function addReaction(channelId: Snowflake, messagelId: Snowflake, emoji: string): Promise<void>;
export declare function deleteUserReaction(channelId: Snowflake, messagelId: Snowflake, emoji: string, userId: Snowflake): Promise<void>;
export declare function deleteAllReactions(channelId: Snowflake, messagelId: Snowflake): Promise<void>;
export declare function createGlobalApplicationCommand(command: DiscordApplicationCommand): Promise<void>;