import type { IFile, OmitBetterStrict } from "$lib/types";

/**
 * Base class for all converters.
 */
export class Converter {
	/**
	 * List of supported formats.
	 */
	public supportedFormats: string[] = [];
	/**
	 * Convert a file to a different format.
	 * @param input The input file.
	 * @param to The format to convert to. Includes the dot.
	 */
	public async convert(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		input: OmitBetterStrict<IFile, "extension">,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		to: string,
	): Promise<IFile> {
		throw new Error("Not implemented");
	}
}