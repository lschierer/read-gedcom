const ANSEL_TABLE_1 = [[0x8D, 0x200D], [0x8E, 0x200C], [0xA1, 0x0141], [0xA2, 0x00D8], [0xA3, 0x00D0], [0xA4, 0x00DE], [0xA5, 0x00C6], [0xA6, 0x0152], [0xA7, 0x02B9], [0xA8, 0x00B7], [0xA9, 0x266D], [0xAA, 0x00AE], [0xAB, 0x00B1], [0xAC, 0x01A0], [0xAD, 0x01AF], [0xAE, 0x02BE], [0xB0, 0x00B0], [0xB1, 0x0142], [0xB2, 0x00F8], [0xB3, 0x0111], [0xB4, 0x00FE], [0xB5, 0x00E6], [0xB6, 0x0153], [0xB7, 0x02BA], [0xB8, 0x0131], [0xB9, 0x00A3], [0xBA, 0x00F0], [0xBC, 0x01A1], [0xBD, 0x01B0], [0xC0, 0x00B0], [0xC1, 0x2113], [0xC2, 0x2117], [0xC3, 0x00A9], [0xC4, 0x266F], [0xC5, 0x00BF], [0xC6, 0x00A1], [0xCF, 0x00DF], [0xE0, 0x0309], [0xE1, 0x0300], [0xE2, 0x0301], [0xE3, 0x0302], [0xE4, 0x0303], [0xE5, 0x0304], [0xE6, 0x0306], [0xE7, 0x0307], [0xE9, 0x030C], [0xEA, 0x030A], [0xEB, 0xFE20], [0xEC, 0xFE21], [0xED, 0x0315], [0xEE, 0x030B], [0xEF, 0x0310], [0xF0, 0x0327], [0xF1, 0x0328], [0xF2, 0x0323], [0xF3, 0x0324], [0xF4, 0x0325], [0xF5, 0x0333], [0xF6, 0x0332], [0xF7, 0x0326], [0xF8, 0x031C], [0xF9, 0x032E], [0xFA, 0xFE22], [0xFB, 0xFE23], [0xFE, 0x0313], [0x81, 0x00FC], [0x88, 0x0098], [0x89, 0x009C], [0x92, 0x0027], [0x93, 0x201C], [0x94, 0x201D], [0xC7, 0x00DF], [0xC8, 0x20AC], [0xE8, 0x0308], [0xBE, 0x25AF], [0xBF, 0x25AE], [0xCD, 0x0065], [0xCE, 0x006F]];
const ANSEL_TABLE_2 = [[0xE020, 0x02C0], [0xE041, 0x1EA2], [0xE045, 0x1EBA], [0xE049, 0x1EC8], [0xE04F, 0x1ECE], [0xE055, 0x1EE6], [0xE059, 0x1EF6], [0xE061, 0x1EA3], [0xE065, 0x1EBB], [0xE069, 0x1EC9], [0xE06F, 0x1ECF], [0xE075, 0x1EE7], [0xE079, 0x1EF7], [0xE120, 0x02CB], [0xE141, 0x00C0], [0xE145, 0x00C8], [0xE149, 0x00CC], [0xE14F, 0x00D2], [0xE155, 0x00D9], [0xE157, 0x1E80], [0xE159, 0x1EF2], [0xE161, 0x00E0], [0xE165, 0x00E8], [0xE169, 0x00EC], [0xE16F, 0x00F2], [0xE175, 0x00F9], [0xE177, 0x1E81], [0xE179, 0x1EF3], [0xE220, 0x02CA], [0xE241, 0x00C1], [0xE243, 0x0106], [0xE245, 0x00C9], [0xE247, 0x01F4], [0xE249, 0x00CD], [0xE24B, 0x1E30], [0xE24C, 0x0139], [0xE24D, 0x1E3E], [0xE24E, 0x0143], [0xE24F, 0x00D3], [0xE250, 0x1E54], [0xE252, 0x0154], [0xE253, 0x015A], [0xE255, 0x00DA], [0xE257, 0x1E82], [0xE259, 0x00DD], [0xE25A, 0x0179], [0xE261, 0x00E1], [0xE263, 0x0107], [0xE265, 0x00E9], [0xE267, 0x01F5], [0xE269, 0x00ED], [0xE26B, 0x1E31], [0xE26C, 0x013A], [0xE26D, 0x1E3F], [0xE26E, 0x0144], [0xE26F, 0x00F3], [0xE270, 0x1E55], [0xE272, 0x0155], [0xE273, 0x015B], [0xE275, 0x00FA], [0xE277, 0x1E83], [0xE279, 0x00FD], [0xE27A, 0x017A], [0xE2A5, 0x01FC], [0xE2B5, 0x01FD], [0xE320, 0x02C6], [0xE341, 0x00C2], [0xE343, 0x0108], [0xE345, 0x00CA], [0xE347, 0x011C], [0xE348, 0x0124], [0xE349, 0x00CE], [0xE34A, 0x0134], [0xE34F, 0x00D4], [0xE353, 0x015C], [0xE355, 0x00DB], [0xE357, 0x0174], [0xE359, 0x0176], [0xE35A, 0x1E90], [0xE361, 0x00E2], [0xE363, 0x0109], [0xE365, 0x00EA], [0xE367, 0x011D], [0xE368, 0x0125], [0xE369, 0x00EE], [0xE36A, 0x0135], [0xE36F, 0x00F4], [0xE373, 0x015D], [0xE375, 0x00FB], [0xE377, 0x0175], [0xE379, 0x0177], [0xE37A, 0x1E91], [0xE420, 0x02DC], [0xE441, 0x00C3], [0xE445, 0x1EBC], [0xE449, 0x0128], [0xE44E, 0x00D1], [0xE44F, 0x00D5], [0xE455, 0x0168], [0xE456, 0x1E7C], [0xE459, 0x1EF8], [0xE461, 0x00E3], [0xE465, 0x1EBD], [0xE469, 0x0129], [0xE46E, 0x00F1], [0xE46F, 0x00F5], [0xE475, 0x0169], [0xE476, 0x1E7D], [0xE479, 0x1EF9], [0xE520, 0x02C9], [0xE541, 0x0100], [0xE545, 0x0112], [0xE547, 0x1E20], [0xE549, 0x012A], [0xE54F, 0x014C], [0xE555, 0x016A], [0xE561, 0x0101], [0xE565, 0x0113], [0xE567, 0x1E21], [0xE569, 0x012B], [0xE56F, 0x014D], [0xE575, 0x016B], [0xE5A5, 0x01E2], [0xE5B5, 0x01E3], [0xE620, 0x02D8], [0xE641, 0x0102], [0xE645, 0x0114], [0xE647, 0x011E], [0xE649, 0x012C], [0xE64F, 0x014E], [0xE655, 0x016C], [0xE661, 0x0103], [0xE665, 0x0115], [0xE667, 0x011F], [0xE669, 0x012D], [0xE66F, 0x014F], [0xE675, 0x016D], [0xE720, 0x02D9], [0xE742, 0x1E02], [0xE743, 0x010A], [0xE744, 0x1E0A], [0xE745, 0x0116], [0xE746, 0x1E1E], [0xE747, 0x0120], [0xE748, 0x1E22], [0xE749, 0x0130], [0xE74D, 0x1E40], [0xE74E, 0x1E44], [0xE750, 0x1E56], [0xE752, 0x1E58], [0xE753, 0x1E60], [0xE754, 0x1E6A], [0xE757, 0x1E86], [0xE758, 0x1E8A], [0xE759, 0x1E8E], [0xE75A, 0x017B], [0xE762, 0x1E03], [0xE763, 0x010B], [0xE764, 0x1E0B], [0xE765, 0x0117], [0xE766, 0x1E1F], [0xE767, 0x0121], [0xE768, 0x1E23], [0xE76D, 0x1E41], [0xE76E, 0x1E45], [0xE770, 0x1E57], [0xE772, 0x1E59], [0xE773, 0x1E61], [0xE774, 0x1E6B], [0xE777, 0x1E87], [0xE778, 0x1E8B], [0xE779, 0x1E8F], [0xE77A, 0x017C], [0xE820, 0x00A8], [0xE841, 0x00C4], [0xE845, 0x00CB], [0xE848, 0x1E26], [0xE849, 0x00CF], [0xE84F, 0x00D6], [0xE855, 0x00DC], [0xE857, 0x1E84], [0xE858, 0x1E8C], [0xE859, 0x0178], [0xE861, 0x00E4], [0xE865, 0x00EB], [0xE868, 0x1E27], [0xE869, 0x00EF], [0xE86F, 0x00F6], [0xE874, 0x1E97], [0xE875, 0x00FC], [0xE877, 0x1E85], [0xE878, 0x1E8D], [0xE879, 0x00FF], [0xE920, 0x02C7], [0xE941, 0x01CD], [0xE943, 0x010C], [0xE944, 0x010E], [0xE945, 0x011A], [0xE947, 0x01E6], [0xE949, 0x01CF], [0xE94B, 0x01E8], [0xE94C, 0x013D], [0xE94E, 0x0147], [0xE94F, 0x01D1], [0xE952, 0x0158], [0xE953, 0x0160], [0xE954, 0x0164], [0xE955, 0x01D3], [0xE95A, 0x017D], [0xE961, 0x01CE], [0xE963, 0x010D], [0xE964, 0x010F], [0xE965, 0x011B], [0xE967, 0x01E7], [0xE969, 0x01D0], [0xE96A, 0x01F0], [0xE96B, 0x01E9], [0xE96C, 0x013E], [0xE96E, 0x0148], [0xE96F, 0x01D2], [0xE972, 0x0159], [0xE973, 0x0161], [0xE974, 0x0165], [0xE975, 0x01D4], [0xE97A, 0x017E], [0xEA20, 0x02DA], [0xEA41, 0x00C5], [0xEA61, 0x00E5], [0xEA75, 0x016F], [0xEA77, 0x1E98], [0xEA79, 0x1E99], [0xEAAD, 0x016E], [0xED20, 0x02BC], [0xEE20, 0x02DD], [0xEE4F, 0x0150], [0xEE55, 0x0170], [0xEE6F, 0x0151], [0xEE75, 0x0171], [0xF020, 0x00B8], [0xF043, 0x00C7], [0xF044, 0x1E10], [0xF047, 0x0122], [0xF048, 0x1E28], [0xF04B, 0x0136], [0xF04C, 0x013B], [0xF04E, 0x0145], [0xF052, 0x0156], [0xF053, 0x015E], [0xF054, 0x0162], [0xF063, 0x00E7], [0xF064, 0x1E11], [0xF067, 0x0123], [0xF068, 0x1E29], [0xF06B, 0x0137], [0xF06C, 0x013C], [0xF06E, 0x0146], [0xF072, 0x0157], [0xF073, 0x015F], [0xF074, 0x0163], [0xF120, 0x02DB], [0xF141, 0x0104], [0xF145, 0x0118], [0xF149, 0x012E], [0xF14F, 0x01EA], [0xF155, 0x0172], [0xF161, 0x0105], [0xF165, 0x0119], [0xF169, 0x012F], [0xF16F, 0x01EB], [0xF175, 0x0173], [0xF241, 0x1EA0], [0xF242, 0x1E04], [0xF244, 0x1E0C], [0xF245, 0x1EB8], [0xF248, 0x1E24], [0xF249, 0x1ECA], [0xF24B, 0x1E32], [0xF24C, 0x1E36], [0xF24D, 0x1E42], [0xF24E, 0x1E46], [0xF24F, 0x1ECC], [0xF252, 0x1E5A], [0xF253, 0x1E62], [0xF254, 0x1E6C], [0xF255, 0x1EE4], [0xF256, 0x1E7E], [0xF257, 0x1E88], [0xF259, 0x1EF4], [0xF25A, 0x1E92], [0xF261, 0x1EA1], [0xF262, 0x1E05], [0xF264, 0x1E0D], [0xF265, 0x1EB9], [0xF268, 0x1E25], [0xF269, 0x1ECB], [0xF26B, 0x1E33], [0xF26C, 0x1E37], [0xF26D, 0x1E43], [0xF26E, 0x1E47], [0xF26F, 0x1ECD], [0xF272, 0x1E5B], [0xF273, 0x1E63], [0xF274, 0x1E6D], [0xF275, 0x1EE5], [0xF276, 0x1E7F], [0xF277, 0x1E89], [0xF279, 0x1EF5], [0xF27A, 0x1E93], [0xF355, 0x1E72], [0xF375, 0x1E73], [0xF441, 0x1E00], [0xF461, 0x1E01], [0xF520, 0x2017], [0xF948, 0x1E2A], [0xF968, 0x1E2B], [0xFC20, 0x0338], [0xFC41, 0x023A], [0xFC43, 0x023B], [0xFC45, 0x0246], [0xFC4B, 0xA742], [0xFC4C, 0x0141], [0xFC4F, 0x00D8], [0xFC51, 0xA758], [0xFC54, 0x023E], [0xFC56, 0xA75E], [0xFC61, 0x2C65], [0xFC63, 0x023C], [0xFC65, 0x0247], [0xFC6B, 0xA743], [0xFC6C, 0x0142], [0xFC6F, 0x00F8], [0xFC71, 0xA759], [0xFC74, 0x2C66], [0xFC76, 0xA75F], [0xD741, 0x2550], [0xD742, 0x2551], [0xD743, 0x2557], [0xD744, 0x255D], [0xD745, 0x255A], [0xD746, 0x2554], [0xD747, 0x2563], [0xD748, 0x2569], [0xD749, 0x2560], [0xD74A, 0x2566], [0xD74B, 0x256C], [0xD74C, 0x2562], [0xD74D, 0x2567], [0xD74E, 0x255F], [0xD74F, 0x2564], [0xD750, 0x2561], [0xD751, 0x2568], [0xD752, 0x255E], [0xD753, 0x2565], [0xD754, 0x256A], [0xD755, 0x2591], [0xD756, 0x2592], [0xD757, 0x2593], [0xD758, 0x2588], [0xD761, 0x2500], [0xD762, 0x2502], [0xD763, 0x2510], [0xD764, 0x2518], [0xD765, 0x2514], [0xD766, 0x250C], [0xD767, 0x2524], [0xD768, 0x2534], [0xD769, 0x251C], [0xD76A, 0x252C], [0xD76B, 0x253C], [0xD76C, 0x2555], [0xD76D, 0x255B], [0xD76E, 0x2558], [0xD76F, 0x2552], [0xD770, 0x2556], [0xD771, 0x255C], [0xD772, 0x2559], [0xD773, 0x2553], [0xD774, 0x256B], [0xD775, 0x258C], [0xD776, 0x2580], [0xD777, 0x2590], [0xD778, 0x2584], [0xD779, 0x25AA], [0xD824, 0x03C2], [0xD841, 0x0391], [0xD842, 0x0392], [0xD843, 0x03A5], [0xD844, 0x0394], [0xD845, 0x0395], [0xD846, 0x03A6], [0xD847, 0x0393], [0xD848, 0x03A8], [0xD849, 0x0399], [0xD84B, 0x039A], [0xD84C, 0x039B], [0xD84D, 0x039C], [0xD84E, 0x039D], [0xD84F, 0x039F], [0xD850, 0x03A0], [0xD851, 0x03A7], [0xD852, 0x03A1], [0xD853, 0x03A3], [0xD854, 0x03A4], [0xD855, 0x03A9], [0xD856, 0x0398], [0xD857, 0x0397], [0xD858, 0x039E], [0xD85A, 0x0396], [0xD861, 0x03B1], [0xD862, 0x03B2], [0xD863, 0x03C5], [0xD864, 0x03B4], [0xD865, 0x03B5], [0xD866, 0x03C6], [0xD867, 0x03B3], [0xD868, 0x03C8], [0xD869, 0x03B9], [0xD86B, 0x03BA], [0xD86C, 0x03BB], [0xD86D, 0x03BC], [0xD86E, 0x03BD], [0xD86F, 0x03BF], [0xD870, 0x03C0], [0xD871, 0x03C7], [0xD872, 0x03C1], [0xD873, 0x03C3], [0xD874, 0x03C4], [0xD875, 0x03C9], [0xD876, 0x03B8], [0xD877, 0x03B7], [0xD878, 0x03BE], [0xD87A, 0x03B6], [0xD920, 0x0E3F], [0xD921, 0x00A2], [0xD922, 0x00A5], [0xD923, 0x20A7], [0xD924, 0x0192], [0xD925, 0x00A4], [0xD926, 0x20A4], [0xD927, 0x20A0], [0xD928, 0x20A1], [0xD929, 0x20A2], [0xD92A, 0x20A3], [0xD92B, 0x20A5], [0xD92C, 0x20A6], [0xD92D, 0x20A8], [0xD92E, 0x20A9], [0xD92F, 0x20AA], [0xD930, 0x20AC], [0xD931, 0x00B9], [0xD932, 0x00B2], [0xD933, 0x00B3], [0xD941, 0x00AA], [0xD942, 0x00BA], [0xD943, 0x00AB], [0xD944, 0x00BB], [0xD945, 0x00A6], [0xD946, 0x00B6], [0xD947, 0x00A7], [0xD948, 0x2310], [0xD949, 0x2020], [0xD94A, 0x2021], [0xD94C, 0x2122], [0xD94D, 0xFB01], [0xD94E, 0xFB02], [0xD94F, 0x2039], [0xD950, 0x203A], [0xD951, 0x2030], [0xD952, 0x2026], [0xD953, 0x201C], [0xD954, 0x201D], [0xD955, 0x201A], [0xD956, 0x201E], [0xD957, 0x2022], [0xD958, 0x2013], [0xD959, 0x00A0], [0xD95A, 0x00B5], [0xD961, 0x00BD], [0xD962, 0x00BC], [0xD963, 0x00BE], [0xD964, 0x221E], [0xD965, 0x2205], [0xD966, 0x2208], [0xD967, 0x2229], [0xD968, 0x00AC], [0xD969, 0x2261], [0xD96A, 0x00D7], [0xD96B, 0x2265], [0xD96C, 0x2264], [0xD96D, 0x00F7], [0xD96E, 0x2248], [0xD96F, 0x22C5], [0xD970, 0x2320], [0xD971, 0x2321], [0xD972, 0x221A], [0xD973, 0x2044], [0xD974, 0x2018], [0xD975, 0x2019], [0xD976, 0x2014], [0xD977, 0x00AD], [0xD979, 0x20AD], [0xD97A, 0x20AE], [0xD97B, 0x20AF], [0xD97C, 0x20AB]];

export function decodeAnsel(buffer) {
    function registerTable(map, values) {
        values.forEach(tuple => {
            const [key, value] = tuple;
            map.set(key, value);
        })
    }
    const table1 = new Map(), table2 = new Map();
    registerTable(table1, ANSEL_TABLE_1);
    registerTable(table2, ANSEL_TABLE_2);

    const output = [];
    let pending = -1;
    for(let i = 0; i < buffer.length; i++) {
        const current = buffer[i];
        // TODO
    }
    // TODO
}