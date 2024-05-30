import type { NamedBean } from '@ag-grid-community/core';
import { BeanStub } from '@ag-grid-community/core';

export type ChartTranslationKey = keyof typeof ChartTranslationService.DEFAULT_TRANSLATIONS;

export class ChartTranslationService extends BeanStub implements NamedBean {
    beanName = 'chartTranslationService' as const;

    public static readonly DEFAULT_TRANSLATIONS = {
        pivotChartTitle: 'Pivot Chart',
        rangeChartTitle: 'Range Chart',
        settings: 'Chart',
        data: 'Set Up',
        format: 'Customize',
        categories: 'Categories',
        defaultCategory: '(None)',
        series: 'Series',
        switchCategorySeries: 'Switch Category / Series',
        categoryValues: 'Category Values',
        seriesLabels: 'Series Labels',
        aggregate: 'Aggregate',
        xyValues: 'X Y Values',
        paired: 'Paired Mode',
        axis: 'Axis',
        xAxis: 'Horizontal Axis',
        yAxis: 'Vertical Axis',
        polarAxis: 'Polar Axis',
        radiusAxis: 'Radius Axis',
        navigator: 'Navigator',
        zoom: 'Zoom',
        animation: 'Animation',
        crosshair: 'Crosshair',
        color: 'Color',
        thickness: 'Thickness',
        preferredLength: 'Preferred Length',
        xType: 'X Type',
        axisType: 'Axis Type',
        automatic: 'Automatic',
        category: 'Category',
        number: 'Number',
        time: 'Time',
        timeFormat: 'Time Format',
        autoRotate: 'Auto Rotate',
        labelRotation: 'Rotation',
        circle: 'Circle',
        polygon: 'Polygon',
        orientation: 'Orientation',
        fixed: 'Fixed',
        parallel: 'Parallel',
        perpendicular: 'Perpendicular',
        radiusAxisPosition: 'Position',
        ticks: 'Ticks',
        gridLines: 'Grid Lines',
        width: 'Width',
        height: 'Height',
        length: 'Length',
        padding: 'Padding',
        spacing: 'Spacing',
        chartStyle: 'Chart Style',
        title: 'Title',
        chartTitles: 'Titles',
        chartTitle: 'Chart Title',
        chartSubtitle: 'Subtitle',
        horizontalAxisTitle: 'Horizontal Axis Title',
        verticalAxisTitle: 'Vertical Axis Title',
        polarAxisTitle: 'Polar Axis Title',
        titlePlaceholder: 'Chart title - double click to edit',
        background: 'Background',
        font: 'Font',
        weight: 'Weight',
        top: 'Top',
        right: 'Right',
        bottom: 'Bottom',
        left: 'Left',
        labels: 'Labels',
        calloutLabels: 'Callout Labels',
        sectorLabels: 'Sector Labels',
        positionRatio: 'Position Ratio',
        size: 'Size',
        shape: 'Shape',
        minSize: 'Minimum Size',
        maxSize: 'Maximum Size',
        legend: 'Legend',
        position: 'Position',
        markerSize: 'Marker Size',
        markerStroke: 'Marker Stroke',
        markerPadding: 'Marker Padding',
        itemSpacing: 'Item Spacing',
        itemPaddingX: 'Item Padding X',
        itemPaddingY: 'Item Padding Y',
        layoutHorizontalSpacing: 'Horizontal Spacing',
        layoutVerticalSpacing: 'Vertical Spacing',
        strokeWidth: 'Stroke Width',
        offset: 'Offset',
        offsets: 'Offsets',
        tooltips: 'Tooltips',
        callout: 'Callout',
        markers: 'Markers',
        shadow: 'Shadow',
        blur: 'Blur',
        xOffset: 'X Offset',
        yOffset: 'Y Offset',
        lineWidth: 'Line Width',
        lineDash: 'Line Dash',
        lineDashOffset: 'Dash Offset',
        scrollingZoom: 'Scrolling',
        scrollingStep: 'Scrolling Step',
        selectingZoom: 'Selecting',
        durationMillis: 'Duration (ms)',
        crosshairLabel: 'Label',
        crosshairSnap: 'Snap to Node',
        normal: 'Normal',
        bold: 'Bold',
        italic: 'Italic',
        boldItalic: 'Bold Italic',
        predefined: 'Predefined',
        fillOpacity: 'Fill Opacity',
        strokeColor: 'Line Color',
        strokeOpacity: 'Line Opacity',
        miniChart: 'Mini-Chart',
        histogramBinCount: 'Bin count',
        connectorLine: 'Connector Line',
        seriesItems: 'Series Items',
        seriesItemType: 'Item Type',
        seriesItemPositive: 'Positive',
        seriesItemNegative: 'Negative',
        seriesItemLabels: 'Item Labels',
        columnGroup: 'Column',
        barGroup: 'Bar',
        pieGroup: 'Pie',
        lineGroup: 'Line',
        scatterGroup: 'X Y (Scatter)',
        areaGroup: 'Area',
        polarGroup: 'Polar',
        statisticalGroup: 'Statistical',
        hierarchicalGroup: 'Hierarchical',
        specializedGroup: 'Specialized',
        combinationGroup: 'Combination',
        groupedColumnTooltip: 'Grouped',
        stackedColumnTooltip: 'Stacked',
        normalizedColumnTooltip: '100% Stacked',
        groupedBarTooltip: 'Grouped',
        stackedBarTooltip: 'Stacked',
        normalizedBarTooltip: '100% Stacked',
        pieTooltip: 'Pie',
        donutTooltip: 'Donut',
        lineTooltip: 'Line',
        groupedAreaTooltip: 'Area',
        stackedAreaTooltip: 'Stacked',
        normalizedAreaTooltip: '100% Stacked',
        scatterTooltip: 'Scatter',
        bubbleTooltip: 'Bubble',
        histogramTooltip: 'Histogram',
        radialColumnTooltip: 'Radial Column',
        radialBarTooltip: 'Radial Bar',
        radarLineTooltip: 'Radar Line',
        radarAreaTooltip: 'Radar Area',
        nightingaleTooltip: 'Nightingale',
        rangeBarTooltip: 'Range Bar',
        rangeAreaTooltip: 'Range Area',
        boxPlotTooltip: 'Box Plot',
        treemapTooltip: 'Treemap',
        sunburstTooltip: 'Sunburst',
        waterfallTooltip: 'Waterfall',
        heatmapTooltip: 'Heatmap',
        columnLineComboTooltip: 'Column & Line',
        areaColumnComboTooltip: 'Area & Column',
        customComboTooltip: 'Custom Combination',
        innerRadius: 'Inner Radius',
        startAngle: 'Start Angle',
        endAngle: 'End Angle',
        reverseDirection: 'Reverse Direction',
        groupPadding: 'Group Padding',
        seriesPadding: 'Series Padding',
        tile: 'Tile',
        whisker: 'Whisker',
        cap: 'Cap',
        capLengthRatio: 'Length Ratio',
        labelPlacement: 'Placement',
        inside: 'Inside',
        outside: 'Outside',
        noDataToChart: 'No data available to be charted.',
        pivotChartRequiresPivotMode: 'Pivot Chart requires Pivot Mode enabled.',
        chartSettingsToolbarTooltip: 'Menu',
        chartLinkToolbarTooltip: 'Linked to Grid',
        chartUnlinkToolbarTooltip: 'Unlinked from Grid',
        chartDownloadToolbarTooltip: 'Download Chart',
        chartMenuToolbarTooltip: 'Menu',
        chartEdit: 'Edit Chart',
        chartAdvancedSettings: 'Advanced Settings',
        chartLink: 'Link to Grid',
        chartUnlink: 'Unlink from Grid',
        chartDownload: 'Download Chart',
        histogramFrequency: 'Frequency',
        seriesChartType: 'Series Chart Type',
        seriesType: 'Series Type',
        secondaryAxis: 'Secondary Axis',
        seriesAdd: 'Add a series',
        categoryAdd: 'Add a category',
        bar: 'Bar',
        column: 'Column',
        histogram: 'Histogram',
        advancedSettings: 'Advanced Settings',
        direction: 'Direction',
        horizontal: 'Horizontal',
        vertical: 'Vertical',
        seriesGroupType: 'Group Type',
        groupedSeriesGroupType: 'Grouped',
        stackedSeriesGroupType: 'Stacked',
        normalizedSeriesGroupType: '100% Stacked',
        legendEnabled: 'Enabled',
        invalidColor: 'Color value is invalid',
        groupedColumnFull: 'Grouped Column',
        stackedColumnFull: 'Stacked Column',
        normalizedColumnFull: '100% Stacked Column',
        groupedBarFull: 'Grouped Bar',
        stackedBarFull: 'Stacked Bar',
        normalizedBarFull: '100% Stacked Bar',
        stackedAreaFull: 'Stacked Area',
        normalizedAreaFull: '100% Stacked Area',
        customCombo: 'Custom Combination',

        // menu items
        groupedColumn: 'Grouped',
        stackedColumn: 'Stacked',
        pie: 'Pie',
        donut: 'Donut',
        line: 'Line',
        scatter: 'Scatter',
        bubble: 'Bubble',
        area: 'Area',
        stackedArea: 'Stacked',
        radarLine: 'Radar Line',
        radarArea: 'Radar Area',
        nightingale: 'Nightingale',
        radialColumn: 'Radial Column',
        radialBar: 'Radial Bar',
        boxPlot: 'Box Plot',
        rangeBar: 'Range Bar',
        rangeArea: 'Range Area',
        treemap: 'Treemap',
        sunburst: 'Sunburst',
        waterfall: 'Waterfall',
        heatmap: 'Heatmap',
        columnLineCombo: 'Column & Line',
        AreaColumnCombo: 'Area & Column',

        // aria
        ariaChartMenuClose: 'Close Chart Edit Menu',
        ariaChartSelected: 'Selected',

        // group
        group: 'Group',

        // time formats
        timeFormatSlashesDDMMYYYY: 'DD/MM/YYYY',
        timeFormatSlashesMMDDYYYY: 'MM/DD/YYYY',
        timeFormatSlashesDDMMYY: 'DD/MM/YY',
        timeFormatSlashesMMDDYY: 'MM/DD/YY',
        timeFormatDotsDDMYY: 'DD.M.YY',
        timeFormatDotsMDDYY: 'M.DD.YY',
        timeFormatDashesYYYYMMDD: 'YYYY-MM-DD',
        timeFormatSpacesDDMMMMYYYY: 'DD MMMM YYYY',
        timeFormatHHMMSS: 'HH:MM:SS',
        timeFormatHHMMSSAmPm: 'HH:MM:SS AM/PM',

        // agg funcs
        sum: 'Sum',
        first: 'First',
        last: 'Last',
        min: 'Min',
        max: 'Max',
        count: 'Count',
        avg: 'Average',
    };

    public translate(toTranslate: ChartTranslationKey): string {
        const translate = this.localeService.getLocaleTextFunc();
        const defaultTranslation = ChartTranslationService.DEFAULT_TRANSLATIONS[toTranslate];
        return translate(toTranslate, defaultTranslation);
    }
}
