export interface StockCandle {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  change?: number;
  changePercent?: number;
}

export interface StockProfile {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  currentPrice: number;
  previousClose: number;
  change: number;
  changePercent: number;
  dayHigh: number;
  dayLow: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  volume: number;
  marketCap: number;
  peRatio?: number;
  sector?: string;
  description?: string;
}

export type ForecastSignal = 'STRONG_BUY' | 'BUY' | 'HOLD' | 'SELL' | 'STRONG_SELL';

export interface ForecastPoint {
  date: string;
  dayIndex: number; // 1 to 30
  predictedClose: number;
  lowerConfidence95: number;
  upperConfidence95: number;
  lowerConfidence80: number;
  upperConfidence80: number;
  trendDelta: number;
  trendPercentage: number;
  signal: ForecastSignal;
}

export interface BacktestItem {
  date: string;
  actual: number;
  predicted: number;
  error: number;
  errorPercent: number;
}

export interface BacktestResult {
  trainSize: number;
  testSize: number;
  testStartDate: string;
  testEndDate: string;
  actualVsPredicted: BacktestItem[];
  mae: number;              // Mean Absolute Error ($)
  rmse: number;             // Root Mean Squared Error ($)
  mape: number;             // Mean Absolute Percentage Error (%)
  directionalAccuracy: number; // % correct direction (Up/Down)
  r2Score: number;          // R-squared goodness of fit (0 to 1)
  sharpeRatio: number;      // Risk-adjusted metrics
  maxDrawdown: number;      // Max drawdown %
  winRate: number;          // % of predictions within 2.5% tolerance
  evaluationGrade: 'Excellent' | 'Good' | 'Moderate' | 'Volatile';
}

export type ModelAlgorithm = 'ensemble' | 'monte_carlo' | 'arima' | 'holt_winters' | 'linear_momentum';

export interface ModelMetadata {
  id: ModelAlgorithm;
  name: string;
  badge: string;
  description: string;
  formula: string;
  bestFor: string;
}

export interface ModelComparisonItem {
  id: ModelAlgorithm;
  name: string;
  badge: string;
  mape: number;
  rmse: number;
  directionalAccuracy: number;
  r2Score: number;
  predicted30DClose: number;
  expectedReturnPercent: number;
  isRecommended: boolean;
}

export interface TechnicalIndicators {
  rsi14: number;
  rsiSignal: 'Oversold' | 'Neutral' | 'Overbought';
  sma20: number;
  sma50: number;
  sma200: number;
  ema20: number;
  macd: {
    macdLine: number;
    signalLine: number;
    histogram: number;
    signal: 'Bullish Crossover' | 'Bearish Crossover' | 'Neutral';
  };
  bollingerBands: {
    upper: number;
    middle: number;
    lower: number;
    bandwidth: number;
  };
  volatility30D: number; // Annualized %
  supportLevel: number;
  resistanceLevel: number;
}

export interface AIAnalysisResult {
  summary: string;
  sentimentScore: number; // -100 to 100
  sentimentLabel: 'Strongly Bullish' | 'Bullish' | 'Neutral' | 'Bearish' | 'Strongly Bearish';
  keyCatalysts: string[];
  risksAndHeadwinds: string[];
  technicalSignals: Array<{
    indicator: string;
    signal: 'Bullish' | 'Neutral' | 'Bearish';
    explanation: string;
  }>;
  riskAssessment: {
    riskScore: number; // 1 to 10
    riskLevel: 'Low' | 'Moderate' | 'High' | 'Extreme';
    volatilityRisk: string;
    suggestedStopLoss: number;
    suggestedTakeProfit: number;
  };
  next30DaysForecastVerdict: string;
  tradingAction: 'Strong Buy' | 'Accumulate' | 'Hold' | 'Take Profit' | 'Reduce Exposure';
  confidenceScore: number; // 0 to 100%
  generatedAt: string;
}

export interface PresetStock {
  symbol: string;
  name: string;
  category: 'Tech' | 'AI & Chips' | 'Indices' | 'Crypto' | 'Automotive' | 'Retail';
  iconColor: string;
}
