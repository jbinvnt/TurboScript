import {WasmSectionBinary} from "../wasm-binary-section";
import {WasmSection} from "../../core/wasm-section";
import {ByteArray} from "../../../../utils/bytearray";
/**
 * Created by 01 on 2017-06-17.
 */
export class ImportSection extends WasmSectionBinary {
    constructor(){
        super(
            WasmSection.Import,
            0,
            null, null,
            new ByteArray()
        )
    }
}
